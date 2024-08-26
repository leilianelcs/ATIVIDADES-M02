import { useState, useEffect } from "react"

export function Noticia(){
    const[noticia, setNoticia]= useState(null);
    const[isLoading, setIsLoading]= useState(true);

    async function getNoticia(){
        try {
            console.log('renderizou');
            setIsLoading(true);
            const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release/');
            const data= await response.json();
            setNoticia(data.items[0])
        } catch (error) {
            console.log(error);            
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getNoticia()
}, [])

return(
    isLoading ? <span>Notícia sendo carregada</span> :(
        <div>
             <h1>Notícia</h1>
            <h2> {noticia.titulo}</h2>
            <p> {noticia.introducao}</p>
            
        </div>
        )
    )
}