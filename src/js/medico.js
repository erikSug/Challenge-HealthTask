let user_name = sessionStorage.getItem("user");
let user_action_raw = localStorage.getItem(user_name);

let user_action = JSON.parse(user_action_raw);
let voltar = document.getElementById("voltar");

let container = document.getElementById("container");

console.log(user_action);


function create(n){
    let new_div = document.createElement("div");
    new_div.classList.add("tarefas") // Utilizar a classe "tarefas" para o css
    let title_p = document.createElement("h2");
    let action_p = document.createElement("p");
    let time_p = document.createElement("p");
    title_p.textContent = user_action[n]['title'];
    action_p.textContent = user_action[n]['action'];
    time_p.textContent = user_action[n]['time'];
    new_div.appendChild(title_p);
    new_div.appendChild(action_p);
    new_div.appendChild(time_p);
    container.appendChild(new_div);
}

for (let i = 0; i < user_action.length; i++){
    create(i)
}
// console.log(user_action[0]['title'])