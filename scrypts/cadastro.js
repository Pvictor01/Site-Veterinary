function sendData() {
  let email = document.querySelector('#email').value
  let senha = document.querySelector('#senha').value
 
  if(email == '' || senha == '') {
    alert('Preencha todos os campos')
  } else {
    alert('Dados enviados!')
  }
}

function clean() {
  document.querySelector('#email').value == ''
  document.querySelector('#senha').value == ''

}