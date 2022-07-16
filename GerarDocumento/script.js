let gerarDoc = document.getElementById("gerardoc");
gerarDoc.addEventListener("click", function () {
  let nomeCliente = document.getElementById("nome-cliente");
  pedirCliente = window.prompt("Insira o nome do cliente");
  nomeCliente.innerHTML = pedirCliente;

  let pedido = document.getElementById("pedido-cliente");
  pedirPedido = window.prompt("Insira o número do pedido");
  pedido.innerHTML = pedirPedido;

  let validade = document.getElementById("validade");
  pedirValidade = window.prompt("Insira a validade");
  validade.innerHTML = pedirValidade;

  let unidade = document.getElementById("unidade");
  pedirUnidade = window.prompt("Insira quantos estão prestes");
  unidade.innerHTML = pedirUnidade;

  let nomeProduto = document.getElementById("nome-produto");
  pedirProduto = window.prompt("Insira o nome do produto");
  nomeProduto.innerHTML = pedirProduto;

  let valorProduto = document.getElementById("valor-produto");
  pedirValor = window.prompt("Insira o valor do produto");
  valorProduto.innerHTML = pedirValor;
});

let enviarEmail = document.getElementById("enviar-email");
enviarEmail.addEventListener("click", function () {
  emailCliente = window.prompt("Digite o e-mail do cliente");
  const range = document.createRange();
  range.selectNode(document.getElementById("corpo"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  var mailto = "mailto:" + emailCliente + "?subject=Atendimento Farmagora";
  window.open(mailto);
});
