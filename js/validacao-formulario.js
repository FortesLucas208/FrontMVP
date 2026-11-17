/**
 * validacao-formulario.js
 * Validação do formulário de contato (contato.html) - EcoVida / Impacto na Prática
 *
 * O que este arquivo faz:
 *  1. Desativa a validação nativa do navegador (novalidate) e valida em JavaScript.
 *  2. Usa event.preventDefault() no envio e mostra mensagens de erro ao lado de cada campo.
 *  3. Destaca visualmente os campos inválidos (aria-invalid + classes CSS) e move o foco
 *     para o primeiro campo com erro.
 *  4. Mostra um resumo de erros no topo do formulário (acessível para leitores de tela).
 *  5. Em caso de sucesso, salva o último envio no localStorage e exibe confirmação.
 *
 * Como usar: incluir no final de contato.html, antes de </body>:
 *   <script src="js/validacao-formulario.js" defer></script>
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
   * Configuração
   * ------------------------------------------------------------------ */
  var CHAVE_STORAGE = 'ecovida_ultimo_contato'; // chave usada no localStorage
  var MIN_MENSAGEM = 10;                         // mínimo de caracteres da mensagem

  var form = document.querySelector('main form') || document.querySelector('form');
  if (!form) { return; } // página sem formulário: nada a fazer

  // Desliga a validação nativa; quem valida agora é este script.
  form.setAttribute('novalidate', 'novalidate');

  var contadorId = 0;

  /* ------------------------------------------------------------------
   * Funções auxiliares
   * ------------------------------------------------------------------ */

  /** Retorna os campos de entrada do formulário (sem botões nem hidden). */
  function obterCampos() {
    return Array.prototype.slice.call(form.elements).filter(function (el) {
      return /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName) &&
        !/^(submit|reset|button|hidden|image)$/.test(el.type);
    });
  }

  /** Garante que o campo tenha id (necessário para ligar mensagens e links). */
  function garantirId(campo) {
    if (!campo.id) {
      contadorId += 1;
      campo.id = 'campo-auto-' + contadorId;
    }
    return campo.id;
  }

  /** Campos do mesmo grupo (radios com o mesmo name); para os demais, só o próprio. */
  function obterGrupo(campo) {
    if (campo.type === 'radio' && campo.name) {
      return Array.prototype.slice.call(
        form.querySelectorAll('input[type="radio"][name="' + campo.name + '"]')
      );
    }
    return [campo];
  }

  /** Texto do rótulo do campo, sem o asterisco de obrigatório. */
  function obterRotulo(campo) {
    var texto = '';
    if (campo.type === 'radio') {
      var fieldset = campo.closest('fieldset');
      var legenda = fieldset && fieldset.querySelector('legend');
      texto = legenda ? legenda.textContent : campo.name;
    } else if (campo.labels && campo.labels.length) {
      texto = campo.labels[0].textContent;
    } else {
      texto = campo.getAttribute('aria-label') || campo.name || campo.id;
    }
    return texto.replace(/\*/g, '').replace(/\s+/g, ' ').trim();
  }

  /** Data de hoje no formato AAAA-MM-DD (usada para impedir datas futuras). */
  function hojeISO() {
    var d = new Date();
    var mes = ('0' + (d.getMonth() + 1)).slice(-2);
    var dia = ('0' + d.getDate()).slice(-2);
    return d.getFullYear() + '-' + mes + '-' + dia;
  }

  /** Liga ou desliga um id em aria-describedby sem apagar os ids já existentes. */
  function ligarDescricao(campo, id, ligar) {
    var atuais = (campo.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
    var posicao = atuais.indexOf(id);
    if (ligar && posicao < 0) { atuais.push(id); }
    if (!ligar && posicao >= 0) { atuais.splice(posicao, 1); }
    if (atuais.length) {
      campo.setAttribute('aria-describedby', atuais.join(' '));
    } else {
      campo.removeAttribute('aria-describedby');
    }
  }

  /* ------------------------------------------------------------------
   * Regras de validação
   * Retorna a mensagem de erro (texto) ou '' quando o campo é válido.
   * ------------------------------------------------------------------ */
  function obterErro(campo) {
    var v = campo.validity;
    var nome = obterRotulo(campo);
    var valor = campo.value;
    var tipo = campo.type;
    var ehTexto = campo.tagName === 'TEXTAREA' ||
      /^(text|email|tel|search|url|password)$/.test(tipo);

    // 1) Obrigatório (inclui campos preenchidos só com espaços)
    if (campo.required && ehTexto && valor.trim() === '') {
      return 'Preencha o campo "' + nome + '".';
    }
    if (v.valueMissing) {
      if (tipo === 'checkbox') { return 'Marque esta caixa para poder enviar a mensagem.'; }
      if (tipo === 'radio') { return 'Escolha uma opção em "' + nome + '".'; }
      if (campo.tagName === 'SELECT') { return 'Selecione uma opção em "' + nome + '".'; }
      return 'Preencha o campo "' + nome + '".';
    }

    // 2) Formato (e-mail, telefone, etc.)
    if (v.typeMismatch) {
      if (tipo === 'email') { return 'Informe um e-mail válido, como nome@exemplo.com.'; }
      return 'O valor informado em "' + nome + '" é inválido.';
    }
    if (v.patternMismatch) {
      if (tipo === 'tel') { return 'Use o formato (11) 91234-5678 no campo "' + nome + '".'; }
      return campo.title || 'O formato do campo "' + nome + '" é inválido.';
    }

    // 3) Limites numéricos e de tamanho
    if (v.rangeUnderflow) { return 'O valor mínimo de "' + nome + '" é ' + campo.min + '.'; }
    if (v.rangeOverflow) { return 'O valor máximo de "' + nome + '" é ' + campo.max + '.'; }
    if (v.stepMismatch || v.badInput) { return 'Informe um valor válido em "' + nome + '".'; }
    if (v.tooShort) {
      return 'Use pelo menos ' + campo.minLength + ' caracteres em "' + nome + '".';
    }

    // 4) Regras extras (feitas em JavaScript, além do HTML)
    var identificacao = campo.id + ' ' + campo.name;

    // Nome completo: exige nome e sobrenome
    if (tipo === 'text' && /nome/i.test(identificacao) && valor.trim() &&
        valor.trim().split(/\s+/).length < 2) {
      return 'Informe nome e sobrenome em "' + nome + '".';
    }

    // Mensagem: tamanho mínimo
    if (campo.tagName === 'TEXTAREA' && campo.required &&
        valor.trim().length < MIN_MENSAGEM) {
      return 'Escreva pelo menos ' + MIN_MENSAGEM + ' caracteres em "' + nome + '".';
    }

    // Data de nascimento não pode ser futura
    if (tipo === 'date' && valor && /nasc/i.test(identificacao + ' ' + nome) &&
        valor > hojeISO()) {
      return 'A "' + nome + '" não pode estar no futuro.';
    }

    return '';
  }

  /* ------------------------------------------------------------------
   * Exibição dos erros (mensagem + destaque visual + ARIA)
   * ------------------------------------------------------------------ */

  /** Elemento depois do qual a mensagem de erro será inserida. */
  function obterAncora(campo) {
    if (campo.type === 'radio') { return campo.closest('fieldset') || campo.parentElement; }
    if (campo.type === 'checkbox') { return campo.closest('label') || campo; }
    return campo;
  }

  function obterIdErro(campo) {
    return 'erro-' + (campo.type === 'radio' ? campo.name : garantirId(campo));
  }

  function mostrarErro(campo, mensagem) {
    var id = obterIdErro(campo);
    var elemento = document.getElementById(id);
    if (!elemento) {
      elemento = document.createElement('p');
      elemento.id = id;
      elemento.className = 'erro-campo';
      obterAncora(campo).insertAdjacentElement('afterend', elemento);
    }
    elemento.textContent = mensagem;
    obterGrupo(campo).forEach(function (item) {
      item.setAttribute('aria-invalid', 'true');
      ligarDescricao(item, id, true);
    });
  }

  function limparErro(campo) {
    var id = obterIdErro(campo);
    var elemento = document.getElementById(id);
    if (elemento) { elemento.remove(); }
    obterGrupo(campo).forEach(function (item) {
      item.removeAttribute('aria-invalid');
      ligarDescricao(item, id, false);
    });
  }

  /** Lista (sem mostrar nada) os campos que hoje estão inválidos. */
  function listarInvalidos() {
    var vistos = {};
    return obterCampos().filter(function (campo) {
      if (campo.type === 'radio') {
        if (vistos[campo.name]) { return false; }
        vistos[campo.name] = true;
      }
      return obterErro(campo) !== '';
    });
  }

  /** Resumo de erros no topo do formulário, com links para cada campo. */
  function atualizarResumo(invalidos) {
    var resumo = document.getElementById('resumo-erros');
    if (!invalidos.length) {
      if (resumo) { resumo.remove(); }
      return;
    }
    if (!resumo) {
      resumo = document.createElement('div');
      resumo.id = 'resumo-erros';
      resumo.className = 'resumo-erros';
      resumo.setAttribute('role', 'alert');
      form.insertBefore(resumo, form.firstChild);
    }
    resumo.textContent = '';

    var titulo = document.createElement('p');
    titulo.textContent = invalidos.length === 1
      ? 'Corrija 1 campo antes de enviar:'
      : 'Corrija ' + invalidos.length + ' campos antes de enviar:';

    var lista = document.createElement('ul');
    invalidos.forEach(function (campo) {
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = '#' + garantirId(campo);
      link.textContent = obterRotulo(campo);
      link.addEventListener('click', function (evento) {
        evento.preventDefault();
        campo.focus();
      });
      item.appendChild(link);
      lista.appendChild(item);
    });

    resumo.appendChild(titulo);
    resumo.appendChild(lista);
  }

  /** Valida um único campo e atualiza a tela. Retorna true se estiver válido. */
  function validarCampo(campo) {
    var mensagem = obterErro(campo);
    if (mensagem) { mostrarErro(campo, mensagem); } else { limparErro(campo); }
    if (document.getElementById('resumo-erros')) { atualizarResumo(listarInvalidos()); }
    return mensagem === '';
  }

  /** Valida todos os campos (usado no envio). Retorna a lista de campos inválidos. */
  function validarTudo() {
    var invalidos = listarInvalidos();
    obterCampos().forEach(function (campo) {
      if (invalidos.indexOf(campo) >= 0) {
        mostrarErro(campo, obterErro(campo));
      } else if (campo.type !== 'radio' || invalidos.every(function (i) { return i.name !== campo.name; })) {
        limparErro(campo);
      }
    });
    return invalidos;
  }

  function limparTudo() {
    obterCampos().forEach(limparErro);
    atualizarResumo([]);
    var status = document.getElementById('status-formulario');
    if (status) { status.hidden = true; status.textContent = ''; }
  }

  /* ------------------------------------------------------------------
   * Mensagem de sucesso e localStorage
   * ------------------------------------------------------------------ */

  function obterStatus() {
    var status = document.getElementById('status-formulario');
    if (!status) {
      status = document.createElement('div');
      status.id = 'status-formulario';
      status.className = 'status-formulario';
      status.setAttribute('role', 'status');
      status.setAttribute('tabindex', '-1');
      status.hidden = true;
      form.insertAdjacentElement('afterend', status);
    }
    return status;
  }

  function salvarUltimoContato(registro) {
    try {
      localStorage.setItem(CHAVE_STORAGE, JSON.stringify(registro));
      return true;
    } catch (erro) {
      return false; // armazenamento indisponível (modo privado, bloqueado, etc.)
    }
  }

  function lerUltimoContato() {
    try {
      var bruto = localStorage.getItem(CHAVE_STORAGE);
      return bruto ? JSON.parse(bruto) : null;
    } catch (erro) {
      return null;
    }
  }

  function apagarUltimoContato() {
    try { localStorage.removeItem(CHAVE_STORAGE); } catch (erro) { /* ignora */ }
  }

  function formatarData(iso) {
    var data = new Date(iso);
    return isNaN(data.getTime()) ? '' : data.toLocaleString('pt-BR');
  }

  /** Mostra, abaixo do formulário, o último envio guardado no navegador. */
  function mostrarUltimoContato() {
    var registro = lerUltimoContato();
    var elemento = document.getElementById('ultimo-contato');
    if (!registro) {
      if (elemento) { elemento.remove(); }
      return;
    }
    if (!elemento) {
      elemento = document.createElement('p');
      elemento.id = 'ultimo-contato';
      elemento.className = 'ultimo-contato';
      obterStatus().insertAdjacentElement('afterend', elemento);
    }
    elemento.textContent = '';

    var texto = document.createElement('span');
    texto.textContent = 'Último envio neste navegador: ' + registro.nome +
      ', em ' + formatarData(registro.quando) +
      (registro.assunto ? ' (assunto: ' + registro.assunto + ')' : '') + '.';

    var botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = 'Apagar este registro';
    botao.addEventListener('click', function () {
      apagarUltimoContato();
      mostrarUltimoContato();
    });

    elemento.appendChild(texto);
    elemento.appendChild(botao);
  }

  /** Monta o registro salvo no localStorage (só nome, assunto e data; sem a mensagem). */
  function montarRegistro() {
    var campoNome = form.querySelector('input[autocomplete="name"]') ||
      form.querySelector('input[type="text"]');
    var campoAssunto = form.querySelector('select');
    var assunto = '';
    if (campoAssunto && campoAssunto.selectedIndex >= 0) {
      assunto = campoAssunto.options[campoAssunto.selectedIndex].text;
    }
    return {
      nome: campoNome ? campoNome.value.trim() : 'visitante',
      assunto: assunto,
      quando: new Date().toISOString()
    };
  }

  /* ------------------------------------------------------------------
   * Eventos
   * ------------------------------------------------------------------ */

  // Validação em tempo real
  obterCampos().forEach(function (campo) {
    var ehMarcacao = campo.type === 'radio' || campo.type === 'checkbox' || campo.tagName === 'SELECT';

    // Ao sair do campo: valida só se o usuário digitou algo (evita erro ao apenas passar com Tab)
    campo.addEventListener('blur', function () {
      if (!ehMarcacao && campo.value !== '') { validarCampo(campo); }
    });

    // Ao digitar/alterar: se o campo está com erro, revalida para limpar a mensagem assim que corrigir
    campo.addEventListener('input', function () {
      if (campo.getAttribute('aria-invalid') === 'true') { validarCampo(campo); }
    });
    campo.addEventListener('change', function () {
      if (ehMarcacao || campo.getAttribute('aria-invalid') === 'true') { validarCampo(campo); }
    });
  });

  // Botão "Limpar" (reset): remove erros e mensagens
  form.addEventListener('reset', limparTudo);

  // Envio: fase de captura para impedir que outros scripts tratem o envio antes da validação
  form.addEventListener('submit', function (evento) {
    evento.preventDefault();            // impede o envio/recarregamento da página
    evento.stopImmediatePropagation();  // este script passa a ser o único tratador do envio

    var invalidos = validarTudo();
    atualizarResumo(invalidos);

    if (invalidos.length) {
      invalidos[0].focus();             // leva o foco ao primeiro campo com erro
      return;
    }

    // Tudo certo: guarda no localStorage, limpa o formulário e confirma ao usuário
    var registro = montarRegistro();
    var salvou = salvarUltimoContato(registro);
    form.reset();                       // dispara 'reset' e limpa mensagens antigas

    var status = obterStatus();
    var primeiroNome = registro.nome.split(/\s+/)[0] || 'visitante';
    status.textContent = 'Obrigado, ' + primeiroNome + '! Sua mensagem foi registrada ' +
      '(demonstração — nada foi enviado).' +
      (salvou ? '' : ' Não foi possível guardar o registro neste navegador.');
    status.hidden = false;
    status.focus();

    mostrarUltimoContato();
  }, true);

  mostrarUltimoContato(); // ao carregar a página, mostra o último envio salvo (se existir)
})();