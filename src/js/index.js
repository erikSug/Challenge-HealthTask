const usuarios_sistema = {
    "sistema":"adm123"
}

const usuarios_medico = {
    "medico1":"medico123"
}

function cadastro(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let button = document.getElementById("button")

    if (email in usuarios_sistema && password == usuarios_sistema[email]){
        button.addEventListener("click", function(){
            window.location.href = "sistema.html"
        })
    } else if (email in usuarios_medico && password == usuarios_medico[email]){
        button.addEventListener("click", function(){
            window.location.href = "medico.html"
        })
    } else{
        alert("Usuário não encontrado!")
    }
}