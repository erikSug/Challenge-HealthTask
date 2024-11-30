let user_name = sessionStorage.getItem("user");
document.getElementById("nome").innerText = `Seja bem vindo! ${user_name}`
let user_action_raw = localStorage.getItem(user_name);

let user_action = JSON.parse(user_action_raw);

let container = document.getElementById("container");

console.log(user_action);


function create(n){
    let new_div = document.createElement("div");
    new_div.classList.add("tarefas") // Utilizar a classe "tarefas" para o css
    new_div.id = n.toString()
    let title_p = document.createElement("h2");
    let action_p = document.createElement("p");
    let time_p = document.createElement("p");

    const delete_button = document.createElement("button");
    delete_button.addEventListener("click", (event) => {
        const div = delete_button.closest("div")
        deletar(div.id)

    })

    title_p.textContent = user_action[n]['title'];
    action_p.textContent = user_action[n]['action'];
    time_p.textContent = user_action[n]['time'];
    delete_button.textContent = "Finalizar Tarefa"

    new_div.appendChild(title_p);
    new_div.appendChild(action_p);
    new_div.appendChild(time_p);
    new_div.appendChild(delete_button);
    container.appendChild(new_div);
}

for (let i = 0; i < user_action.length; i++){
    create(i)
}


function deletar(n){
   const action_id = parseInt(n);
   let new_action = [];
    for (let i = 0; i <user_action.length; i++){
        if (action_id != i){
            new_action.push(user_action[i])
        }
    }
    localStorage.setItem(user_name, JSON.stringify(new_action));
    location.reload()
}