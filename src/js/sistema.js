function enviar() {
    let title = document.getElementById("title").value;
    let medic = document.getElementById("medico_select").value;
    let time = document.getElementById("time").value;
    let action = document.getElementById("action").value;
    
    if (!title || !medic || !time || !action){
        alert("Preencha todos os campos!");
        return ;
    }

    alert(`Tarefa enviada para médico/médica ${medic}!`);
    let localUser = localStorage.getItem(medic);

    if (localUser) {
        localUser = JSON.parse(localUser); 
    } else {
        localUser = [];
    }


    let newInfo = {
        title: title,
        action: action,
        time: time
    };


    localUser.push(newInfo);

    
    localStorage.setItem(medic, JSON.stringify(localUser));
    
}

function reset(){
    localStorage.clear();
}