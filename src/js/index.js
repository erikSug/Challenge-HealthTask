function cadastro(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email in user_system && password == user_system[email]){
            window.location.href = "sistema.html"
    } else if (email in user_medic && password == user_medic[email]){
            window.location.href = "medico.html"
            sessionStorage.setItem("user",user[email]);
    } else{
        alert("Usuário não encontrado!")
    }
}