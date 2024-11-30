let voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    if (document.referrer) {
        // Volta para a página anterior
        window.history.back();
    } else {
        // Caso não exista uma página anterior, redireciona para um lugar padrão
        window.location.href = 'index.html'; 
    }
})