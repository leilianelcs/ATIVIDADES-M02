document.getElementById('adicionarTarefa').addEventListener('click', function() {
    const novaTarefa = document.getElementById('novaTarefa').value;
    if (novaTarefa) {
        const lista = document.getElementById('listaTarefas');
        const item = document.createElement('li');
        
        const taskText = document.createElement('span');
        taskText.textContent = novaTarefa;
        item.appendChild(taskText);
        
        item.addEventListener('click', function() {        
            if (taskText.style.textDecoration === 'line-through') {
                taskText.style.textDecoration = 'none';
                this.querySelector('.checklist-icon').remove();
            } else {
                taskText.style.textDecoration = 'line-through';
                
                const icon = document.createElement('span');
                icon.classList.add('checklist-icon');
                icon.innerHTML = '✔';
                this.insertBefore(icon, this.firstChild); 
            }
        });
        
        lista.appendChild(item);
        document.getElementById('novaTarefa').value = ''; 
    }
});






