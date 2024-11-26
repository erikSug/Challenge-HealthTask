function enviar() {
    let title = document.getElementById("title").value;
    let medic = document.getElementById("medico_select").value;
    let time = document.getElementById("time").value;
    let action = document.getElementById("action").value;
    
    // Recupera o valor armazenado no localStorage, com a chave do médico
    let localUser = localStorage.getItem(medic);

    // Se o dado existe, converte de volta para um array, caso contrário, cria um array vazio
    if (localUser) {
        localUser = JSON.parse(localUser);  // Se existir, converte de volta para um array
    } else {
        localUser = [];  // Se não existir, cria um array vazio
    }

    // Cria o novo objeto de informações
    let newInfo = {
        title: title,
        action: action,
        time: time
    };

    // Adiciona o novo objeto ao array
    localUser.push(newInfo);

    // Armazena o array atualizado de volta no localStorage
    localStorage.setItem(medic, JSON.stringify(localUser));
}

function reset(){
    localStorage.clear();
}