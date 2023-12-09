function toggleContent(showId, hideId) {
    document.getElementById(showId).style.display = 'flex';
    document.getElementById(hideId).style.display = 'none';
  }

  function verificarPreenchimento() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    var avisoElement = document.getElementById('aviso');
    var infosInscrever = document.getElementById('inscrever-content');

    if (email.trim() === '' || senha.trim() === '' || confirmarSenha.trim() === '') {
      avisoElement.textContent = 'Preencha todos os campos antes de prosseguir.';
      infosInscrever.classList.add('shake'); 
      setTimeout(function() {
        infosInscrever.classList.remove('shake');
      }, 500);
    } else if (senha !== confirmarSenha){
      avisoElement.textContent = 'As senhas não coincidem.';
    } else {
      toggleContent('infos-sucesso', 'infos-inscrever');
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    highlightActiveIcon();
});

function highlightActiveIcon() {
    // Pega a URL da página atual
    var currentPageUrl = window.location.pathname;

    // Tira a classe ativa de todos os ícones
    var sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    // Adiciona a classe ativa ao ícone correspondente à página atual
    var activeLink = document.querySelector('.sidebar-link[href="' + currentPageUrl + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    highlightActiveIcon(); // Verifica se de que o ícone ativo seja destacado ao carregar a página

    var sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove a classe ativa de todos os ícones
            sidebarLinks.forEach(function (otherLink) {
                otherLink.classList.remove('active');
            });

            // Adiciona a classe ativa apenas ao ícone clicado
            link.classList.add('active');
        });
    });
});
