function recuperarInteresses() {
  const lista = document.getElementById('listaTarefas');
  lista.innerHTML = '';

  const interesses = JSON.parse(localStorage.getItem('meus-interesses'));

  if (interesses) {
    interesses.forEach(function (interesse) {
      const item = document.createElement('li');
      const taskText = document.createElement('span');
      taskText.textContent = interesse;
      item.appendChild(taskText);

      item.addEventListener('click', function () {
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
    });
  }
}

document.getElementById('adicionarInteresse').addEventListener('click', function () {
  const novoInteresse = document.getElementById('novoInteresse').value;
  if (novoInteresse) {
    const interesses = JSON.parse(localStorage.getItem('meus-interesses')) || [];
    interesses.push(novoInteresse);
    localStorage.setItem('meus-interesses', JSON.stringify(interesses));
    document.getElementById('novoInteresse').value = '';
    recuperarInteresses();
  }
});

document.querySelector('.button-clear').addEventListener('click', function () {
  localStorage.removeItem('meus-interesses');
  recuperarInteresses();
});

document.addEventListener('DOMContentLoaded', function () {
  recuperarInteresses();
  setInterval(recuperarInteresses, 1000);
});

// Requisição para a API do IBGE notícias
fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?destaque=0')
  .then(response => response.json())
  .then(data => {
    const primeiraNoticia = data.items[0];
    if (primeiraNoticia) {
      const tituloNoticia = primeiraNoticia.titulo;
      document.querySelector('.title-news-today').textContent = tituloNoticia;
    }
  })
  .catch(error => {
    console.error('Erro ao obter notícias:', error);
  });







