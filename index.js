


function login(){
const FORM = document.getElementById('FORM');
const EMAIL = document.getElementById('EMAIL').value;
const PASSWORD = document.getElementById('PASSWORD').value;


if(EMAIL=='ENTRIELEVATE@CO.IN'&&PASSWORD=='ADMIN123'){

alert('LOGIN SUCESSFULL');
window.location.assign("HOMEPAGE.html")

}
else{

    alert('Wrong invalid entry');
}
}

function ForgotPassword()
{

var EMAIL=prompt('ENTER YOUR EMAIL ID CORRECTLY')
alert('your pasword has been sent to:'+EMAIL)





}