/* MENU - mobile */


  function toggleMenu() {
    var menuLinks = document.getElementById("myLinks");
    var titulo = document.getElementById("titulo");

    if (window.getComputedStyle(menuLinks).display === "block") {
      menuLinks.style.display = "none";
      titulo.style.display = "block";
    } else {
      menuLinks.style.display = "block";
      titulo.style.display = "none";
    }
  }


  /*MÁSCARA - telefone*/ 
  document.addEventListener('DOMContentLoaded', function() {
    var telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function() {
      var numeroTelefone = telefoneInput.value.replace(/\D/g, '');
      if (numeroTelefone.length >= 2) {
        telefoneInput.value = '(' + numeroTelefone.slice(0, 2);
        if (numeroTelefone.length > 2) {
          telefoneInput.value += ') ' + numeroTelefone.slice(2, 7);
        }
        if (numeroTelefone.length > 7) {
          telefoneInput.value += '-' + numeroTelefone.slice(7, 11);
        }
      } else {
        telefoneInput.value = numeroTelefone;
      }
    });
  });


   /*MÁSCARA - nome*/ 
  var nome = document.getElementById('nome');
  nome.addEventListener('input', function() {
  var nome_mascara = nome.value.toLowerCase().split(' ');
  for (var i = 0; i < nome_mascara.length; i++) {
    if (nome_mascara[i]) {  // Verifica se a palavra não é vazia
      nome_mascara[i] = nome_mascara[i].charAt(0).toUpperCase() + nome_mascara[i].slice(1);
    }
  }
  nome.value = nome_mascara.join(' ');
})



  



   /*MÁSCARA - senha*/ 
   function verificar_senha() {
    var senha_mascara = document.getElementById('senha').value
    var sem_num = !/\d/.test(senha_mascara)
    var com_num = /\d/.test(senha_mascara)
    var paragraph = document.getElementById('paragrafo')
    var com_simb = /[!@#$%^&*(),.?":{}|<>]/.test(senha_mascara)
    

  
    if(sem_num || senha_mascara.length < 6 ) {
          paragraph.textContent = 'Senha fraca'
          paragraph.className = 'senha-fraca'; 
    }else if (com_num && senha_mascara.length >= 6  && com_simb) { 
      paragraph.textContent = 'Senha forte'
          paragraph.className = 'senha-forte'; 
    } else {
      paragraph.textContent = 'Senha rasoável'
      paragraph.className = 'senha-rasoavel'; 
    }
   }