function recuperarInteresses() {
  const lista = document.getElementById('listaTarefas');
  lista.innerHTML = '';

  const interesses = JSON.parse(localStorage.getItem('meus-interesses'));

  if (interesses) {
      interesses.forEach(function (interesse) {
          const item = document.createElement('li');
          item.textContent = interesse;
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

document.addEventListener('DOMContentLoaded', recuperarInteresses);



// function recuperarInteresses() {
//   const lista = document.getElementById('listaTarefas');
//   lista.innerHTML = '';

//   const interesses = JSON.parse(localStorage.getItem('meus-interesses')); 

//   if (interesses) {
//     interesses.forEach(function(interesse) {
//       const item = document.createElement('li');
//       item.textContent = interesse;
//       lista.appendChild(item);
//     });
//   }
// }

// document.getElementById('adicionarInteresse').addEventListener('click', function() {
//   const novoInteresse = document.getElementById('novoInteresse').value;
//   if (novoInteresse) {
//     const interesses = JSON.parse(localStorage.getItem('meus-interesses')) || [];
//     interesses.push(novoInteresse);
//     localStorage.setItem('meus-interesses', JSON.stringify(interesses));
    
//     document.getElementById('novoInteresse').value = '';
//     recuperarInteresses();
//   }
// });

// document.querySelector('.button-clear').addEventListener('click', function() {
//   localStorage.removeItem('meus-interesses');
//   recuperarInteresses();
// });

// document.addEventListener('DOMContentLoaded', recuperarInteresses);


