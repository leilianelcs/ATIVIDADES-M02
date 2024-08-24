// Função para exibir "página em construção"
function exibirPaginaEmConstrucao() {
    alert("Página em construção");
}

// Adicione eventos de clique aos itens da lista
document.getElementById("sobre").addEventListener("click", exibirPaginaEmConstrucao);
document.getElementById("trailer").addEventListener("click", exibirPaginaEmConstrucao);
document.getElementById("netflix-logo").addEventListener("click", exibirPaginaEmConstrucao);
document.getElementById("atores").addEventListener("click", exibirPaginaEmConstrucao);
document.getElementById("avaliacoes").addEventListener("click", exibirPaginaEmConstrucao);


const episodios = [
    {
        id: 1,
        episodio: "T1:01",
        tempo: "30min",
        imagem: "./imgs/Leo.jpg"
    },
    {
        id: 2,
        episodio: "T1:02",
        tempo: "43min",
        imagem: "./imgs/Leo-2.jpg"
    },
    {
        id: 3,
        episodio: "T1:03",
        tempo: "47min",
        imagem: "./imgs/Leo-3.jpg"
    },
];

const listaEpisodios = document.getElementById("listaEpisodio");

episodios.forEach((episodio) => {
    const cardEpisodio = document.createElement("div");
    cardEpisodio.className = "card-episodio pointer";
    cardEpisodio.style.backgroundImage = `url(${episodio.imagem})`;
    cardEpisodio.innerHTML = `
        <span style="color: white; margin-left: 20px">${episodio.episodio}</span>
        <span style="color: white; margin-left: 20px">${episodio.tempo}</span>
        <button style="color: black; margin-left: 20px" onclick="assistirEpisodio(${episodio.id})">Assistir</button>
    `;
    cardEpisodio.onclick = () => assistirEpisodio(episodio.id);
    listaEpisodios.appendChild(cardEpisodio);
});

function assistirEpisodio(id) {
    console.log("Assistir episódio ", id);
}
