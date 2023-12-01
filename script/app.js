document.addEventListener('DOMContentLoaded', function () {
  // Função para atualizar o contador
  function atualizarContador() {
    // Data de término do contador (pode ser ajustada conforme necessário)
    const dataTermino = new Date('2023-12-01T22:59:59');

    // Data atual
    const agora = new Date();

    // Calcula a diferença em milissegundos entre a data de término e agora
    const diferenca = dataTermino - agora;

    // Calcula horas, minutos e segundos a partir da diferença
    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML com os novos valores
    document.querySelector('.horas .num').textContent = horas;
    document.querySelector('.minutos .num').textContent = minutos;
    document.querySelector('.segundos .num').textContent = segundos;
  }

  // Chama a função de atualização do contador a cada segundo
  setInterval(atualizarContador, 1000);

  // Atualiza o contador imediatamente ao carregar a página
  atualizarContador();
});