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
