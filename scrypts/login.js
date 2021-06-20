function sendData() {
  let email = document.querySelector('#email').value
  let senha = document.querySelector('#password').value

  if(email == '' || senha == '') {
    alert('Preencha todos os campos')
  } else {
    alert('Dados enviados!')
  }
}
