const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

const listaProdutos = document.getElementById('listaProdutos');

produtos.forEach(produto => {
    const item = document.createElement('li');
    item.textContent = `${produto.nome} - R$ ${produto.valor.toFixed(2)}`;
    listaProdutos.appendChild(item);
});
