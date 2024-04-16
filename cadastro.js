
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const btnSubmit = document.getElementById("btn");
const form = document.getElementById("form");


  // Verificar se o e-mail está preenchido e é válido (substitua isEmailValid pela sua função de validação)
form.addEventListener("submit", (event) => {
  event.preventDefault();


  if (inputEmail.value === "" || !isEmailValid(inputEmail.value)) {
    alert("Preencha o campo de e-mail com um formato válido");
    return;
  }
  
  if (inputSenha.value === "") {
    alert("Preencha o campo de Senha");
    return;
  }

  if(!validatePassword(inputSenha.value)){
    alert("Senha precisa ter no mínimo 6 dígitos")
    return
  }

  // Enviar o formulário
  form.submit();
});




//VALIDAR EMAIL 
  function isEmailValid(email) {
    //criar objeto regex para validar email
    const emailRegex = new RegExp(
      /^[a-z0-9._-]+@[a-z-.]+\.[a-z]{2,}$/
    );

    if(emailRegex.test(email)) {
      return true
    } 
      return false
  }

  //------------


  //Validar senha
  function validatePassword(inputSenha, minDigits) {
    if(inputSenha.length >= 6) {
      return true
    } 
      return false
  }