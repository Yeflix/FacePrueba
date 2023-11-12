const emailP = 'ye';
const numP = '0424'
const passCorrecto = 'abc'
const crear = document.getElementById('create') 
const login = document.getElementById('login');
login.addEventListener('click', evaluate);
const password = document.getElementById('password');
var enlace = document.getElementById("miEnlace");

function evaluate() {
  
const inputEmail = document.getElementById('email').value;
const inputPass = document.getElementById ('password').value;

let emailText = inputEmail;
let passText = inputPass;

  if (emailP === emailText &&
  passText == passCorrecto){
    alert('Sus datos son correctos.');
    enlace.href = "Login.html";
  } else if (numP === emailText){
    alert('Sus datos son correctos.');
    enlace.href = 'Login.html'
  } else {
    alert ('Sus datos son erróneos.');
  }
}


