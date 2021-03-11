// selector variables 
var userName = document.querySelector('#name')
var password = document.querySelector('#password')
var email = document.querySelector('#email')
var submitButton = document.querySelector('#submit')

// selector variables for alert with regex
var alertUserName = document.querySelector('#alertusername')
var alertUserPassword = document.querySelector('#alertuserpassword')
var alertUserEmail = document.querySelector('#alertuseremail')
var alertSubmit = document.querySelector('#alertsubmit')

// regex for input fields
var regexUser = /[ \t]/
var regexEmail = /GMAIL/
var counterForSubmitCondition = false

//functions 

submitButton.addEventListener('click', function (e) {
  e.preventDefault()
  if(counterForSubmitCondition){
    alertSubmit.style.color = 'blue'
    alertSubmit.innerHTML = 'Seus dados batem com os pré-requisitos, Muito Obrigado!'
  } else {
    alertSubmit.style.color = 'red'
    alertSubmit.innerHTML = 'Infelizmente, seus dados não batem com os pré-requisitos. Tente novamente.'
  }
})


function handleInputFieldOnKeyup(element, tagToChange, condition, message, boolean = true) {
  if (boolean) {
    element.addEventListener('keyup', function () {
      if (condition.test(element.value)) {
        tagToChange.innerHTML = message
      } else {
        tagToChange.innerHTML = ''
        counterForSubmitCondition = true
      }
    })
  } else {
    element.addEventListener('keyup', function () {
      if (condition.test((element.value).toUpperCase())) {
        tagToChange.innerHTML = ''
        counterForSubmitCondition = true
      } else {
        tagToChange.innerHTML = message
      }
    })
  }
}

password.addEventListener('keyup', function () {
  if ((password.value.replace(/[^A-Z]/g, "").length >= 5) && (password.value.replace(/[^!@#$%.%*]/, "").length >= 6) && (password.value.replace(/^-/, ""))) {
    alertUserPassword.innerHTML = ''
    counterForSubmitCondition = true
  } else {
    alertUserPassword.innerHTML = "A senha deve conter 5 letras maiusculas, 6 caracteres especiais e dois hífens"
  }
})


// function calls
handleInputFieldOnKeyup(userName, alertUserName, regexUser, "O nome de usúario não pode conter espaços!")
handleInputFieldOnKeyup(email, alertUserEmail, regexEmail, "O email deve ser gmail!", false)




