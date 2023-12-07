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