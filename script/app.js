document.addEventListener('DOMContentLoaded', function () {
  // Função para atualizar o contador
  function atualizarContador() {
    // Data de término do contador (pode ser ajustada conforme necessário)
    const dataTermino = new Date('2023-12-07T22:59:59');

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

  function confirmAge(isOver18) {

    var overlay = document.getElementById('overlay')
    var modalAcesso = document.getElementById('modal-acesso');
    var modalAcessoNegado = document.getElementById('modal-acesso-negado');

    if (isOver18) {
      overlay.classList.add('fadeOut');
      setTimeout(function () {
        overlay.style.display = 'none';
        overlay.classList.remove('fadeOut');
      }, 1000);
    } else {
      modalAcesso.style.display = 'none';
      modalAcessoNegado.style.display = 'block';
    }
  }

  document.getElementById('linkHistorico').addEventListener('click', function() {
    smoothScrollTo('historico'); 
});

function smoothScrollTo(targetId) {
    var targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    
}


