// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    // Validação: verifica se o campo está vazio
    if (!nomeAmigo) {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array e atualiza a lista
    amigos.push(nomeAmigo);
    atualizarListaAmigos();

    // Limpa o campo de entrada
    input.value = '';
    input.focus();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        // Adiciona um botão de remoção para cada amigo
        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Remover';
        buttonRemove.classList.add('remove-button');
        buttonRemove.onclick = () => removerAmigo(index);

        li.appendChild(buttonRemove);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo pelo índice
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo do array
    atualizarListaAmigos(); // Atualiza a lista na interface
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia. Por favor, adicione amigos antes de sortear.');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(`O amigo sorteado é: <strong>${amigoSorteado}</strong>`);
}

// Função auxiliar para exibir o resultado do sorteio
function exibirResultado(mensagem) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${mensagem}</li>`;
}