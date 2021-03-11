// selector variables 
var userName = document.querySelector('#name')
var password = document.querySelector('#password')
var email = document.querySelector('#email')
var submitButton = document.querySelector('#submit')

// selector variables for alert
var alertUserName = document.querySelector('#alertusername')
var alertUserPassword = document.querySelector('#alertuserpassword')
var alertUserEmail = document.querySelector('#alertuseremail')
var alertSubmit = document.querySelector('#alertsubmit')

// regex for input fields
var regexUser = /[ \t]/
var regexEmail = /GMAIL/
var counterForSubmitCondition = false

//functions 

function submitCheck (e) {
  e.preventDefault()
  if(counterForSubmitCondition){
    alertSubmit.style.color = 'blue'
    alertSubmit.innerHTML = 'Seus dados batem com os pré-requisitos, Muito Obrigado!'
  } else {
    alertSubmit.style.color = 'red'
    alertSubmit.innerHTML = 'Infelizmente, seus dados não batem com os pré-requisitos. Tente novamente.'
  }
}

function userNameCheck () {
  if (regexUser.test(userName.value)) {
    alertUserName.innerHTML = "O nome de usúario não pode conter espaços!"
  } else {
    alertUserName.innerHTML = ''
    counterForSubmitCondition = true
  }
}

function emailCheck () {
  if (regexEmail.test((email.value).toUpperCase())) {
    alertUserEmail.innerHTML = ''
    counterForSubmitCondition = true
  } else {
    alertUserEmail.innerHTML = "O email deve ser gmail!"
  }
}

function passWordCheck () {
  if ((password.value.replace(/[^A-Z]/g, "").length >= 5) && (password.value.replace(/[^!@#$%.%*]/, "").length >= 6) && (password.value.replace(/^-/, ""))) {
    alertUserPassword.innerHTML = ''
    counterForSubmitCondition = true
  } else {
    alertUserPassword.innerHTML = "A senha deve conter 5 letras maiusculas, 6 caracteres especiais e dois hífens"
  }
}

//function calls

password.addEventListener('keyup', passWordCheck)
email.addEventListener('keyup', emailCheck)
userName.addEventListener('keyup', userNameCheck)
submitButton.addEventListener('click', submitCheck)


