// evento: algo acontece e desencadeia algo
// sinal para as pessoas sairem para o recreio 
// o que é callback, algo acontece quando ocorre um evento.
// teclou um botao, vai acontecer algo. 
// como sei quando o evento aconteceu?
// o mais comum é o addEventListener

// mas tenho que selecionar um elemento, que é pego pelo getElementById('de qual botao')
// 
// const meuBotao = document.getElementById('botao-principal');
// meuBotao.addEventListener('click', function() {
// 	console.log('Clicou no botao');
// });


document.addEventListener("DOMContentLoaded", () => {
  // Referências
  const m_inputItem = document.getElementById("novo-item");
  const m_inputPessoa = document.getElementById("nome-pessoa");
  const m_btnAdicionar = document.getElementById("btn-adicionar");

  const m_listaConfirmados = document.getElementById("lista-confirmados");
  const m_listaDisponiveis = document.getElementById("lista-disponiveis");

  const m_contadorConfirmados = document.getElementById("contador-confirmados");
  const m_contadorDisponiveis = document.getElementById("contador-disponiveis");

  const m_msgConfirmados = document.getElementById("mensagem-confirmados");
  const m_msgDisponiveis = document.getElementById("mensagem-disponiveis");

  let m_qtdConfirmados = 0;
  let m_qtdDisponiveis = 0;

  // Helpers
  function atualizarContadores() {
    m_contadorConfirmados.textContent =
      `${m_qtdConfirmados} ${m_qtdConfirmados === 1 ? "item confirmado" : "itens confirmados"}`;
    m_contadorDisponiveis.textContent =
      `${m_qtdDisponiveis} ${m_qtdDisponiveis === 1 ? "item disponível" : "itens disponíveis"}`;

    m_msgConfirmados.style.display = m_qtdConfirmados === 0 ? "block" : "none";
    m_msgDisponiveis.style.display = m_qtdDisponiveis === 0 ? "block" : "none";
  }

  function limparInputs() {
    m_inputItem.value = "";
    // Mantém a pessoa para facilitar múltiplos cadastros
    m_inputItem.focus();
  }

  // Fábricas de itens
  function criarItemConfirmado(item, pessoa) {
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `
      <div class="info">
        <span class="titulo">${item}</span>
        <span class="sub">trazido por ${pessoa}</span>
      </div>
      <div class="acoes">
        <button class="btn-remover" aria-label="Remover">❌</button>
      </div>
    `;
    el.querySelector(".btn-remover").addEventListener("click", () => {
      el.remove();
      m_qtdConfirmados--;
      atualizarContadores();
    });
    return el;
  }

  function criarItemDisponivel(item) {
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `
      <div class="info">
        <span class="titulo">${item}</span>
        <span class="sub">aguardando alguém se oferecer</span>
      </div>
      <div class="acoes">
        <button class="btn-ofereco" aria-label="Me oferecer">Me ofereço</button>
        <button class="btn-remover" aria-label="Remover">❌</button>
      </div>
    `;

    el.querySelector(".btn-ofereco").addEventListener("click", () => {
      let pessoaConfirmada = m_inputPessoa.value.trim();
      if (!pessoaConfirmada) {
        pessoaConfirmada = prompt("Informe a pessoa que vai trazer este item:");
        if (!pessoaConfirmada) return;
      }
      el.remove();
      m_qtdDisponiveis--;
      const confirmado = criarItemConfirmado(item, pessoaConfirmada);
      m_listaConfirmados.appendChild(confirmado);
      m_qtdConfirmados++;
      atualizarContadores();
    });

    el.querySelector(".btn-remover").addEventListener("click", () => {
      el.remove();
      m_qtdDisponiveis--;
      atualizarContadores();
    });

    return el;
  }

  // Fluxo principal
  function adicionarItem() {
    const textoItem = m_inputItem.value.trim();
    const textoPessoa = m_inputPessoa.value.trim();

    if (!textoItem) {
      alert("Digite o nome do item.");
      return;
    }

    if (textoItem && textoPessoa) {
      // Vai direto para Confirmados
      const el = criarItemConfirmado(textoItem, textoPessoa);
      m_listaConfirmados.appendChild(el);
      m_qtdConfirmados++;
    } else {
      // Só item → Disponíveis
      const el = criarItemDisponivel(textoItem);
      m_listaDisponiveis.appendChild(el);
      m_qtdDisponiveis++;
    }

    atualizarContadores();
    limparInputs();
  }

  m_btnAdicionar.addEventListener("click", adicionarItem);
  atualizarContadores();
});
