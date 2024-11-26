let user_name = sessionStorage.getItem("user")
console.log(user_name)
let user_action = localStorage.getItem(user_name)
console.log(user_action)

console.log(JSON.parse(user_action))