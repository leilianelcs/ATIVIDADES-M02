document.getElementById('adicionarTarefa').addEventListener('click', function() {
    const novaTarefa = document.getElementById('novaTarefa').value;
    if (novaTarefa) {
        const lista = document.getElementById('listaTarefas');
        const item = document.createElement('li');
        item.textContent = novaTarefa;
        item.addEventListener('click', function() {
            this.style.textDecoration = this.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });
        lista.appendChild(item);
        document.getElementById('novaTarefa').value = ''; // Limpa o campo de texto
    }
});
