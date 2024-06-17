document.getElementById('startInteraction').addEventListener('click', function() {
    var nome = prompt('Qual o seu nome?');
    
    if (nome) {
        var continuar = confirm('Deseja continuar, ' + nome + '?');
        
        if (continuar) {
            alert('Então vamos continuar!');
        } else {
            alert('Certo, ' + nome + '. Obrigado por participar!');
        }
    } else {
        alert('Erro: Por favor, insira seu nome.');
    }
});
