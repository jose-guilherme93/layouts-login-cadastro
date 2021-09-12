// validação de email e senha 
function loginButton() {
    var emailId = document.getElementById("emailId").value
    var passwordId = document.getElementById("passwordId").value
    if (emailId.length < 1) {
        alert("Campo de email vazio")
    } else if (emailId.indexOf('@') < 1) {
        alert("cade o @")
    } else if (passwordId.length < 7) {
        alert("senha muito curta")
    }
}

