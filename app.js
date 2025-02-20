let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    
    amigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;
        
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("botao-remover");
        botaoRemover.onclick = () => removerAmigo(index);
        li.appendChild(botaoRemover);
        
        ul.appendChild(li);
    });
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `🎉 O amigo secreto é: ${sorteado}! 🎉`;
}