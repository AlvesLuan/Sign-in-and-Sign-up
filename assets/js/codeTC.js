let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmeSenha')

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelConfirmSenha = document.querySelector('#labelConfirm')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

usuario.addEventListener('keyup', ()=>{
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = '<strong>Usuario *Insira no minimo 5 caracteres</strong>'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    usuario.setAttribute('style', 'border-color: green')
    labelUsuario.innerHTML = 'Usuario'
    validUsuario = true
  }
})

senha.addEventListener('keyup', ()=>{
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = '<strong>Senha *Insira no minimo 6 caracteres</strong>'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    senha.setAttribute('style', 'border-color: green')
    labelSenha.innerHTML = 'Senha'
    validSenha = true
  }
})

confirmsenha.addEventListener('keyup', ()=>{
  if(senha.value != confirmsenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = '<strong>Confirmar senha *As senhas não conferem</strong>'
    confirmsenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    confirmsenha.setAttribute('style', 'border-color: green')
    labelConfirmSenha.innerHTML = 'Confirmar senha'
    validConfirmSenha = true
  }
})

function cadastrar(){
  if(validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push({
      usuarioCad: usuario.value,
      senhaCad: senha.value
    })
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuario...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
      window.location.href = '../TelaLogin.html'
    }, 3000)
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#confirmsenha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

