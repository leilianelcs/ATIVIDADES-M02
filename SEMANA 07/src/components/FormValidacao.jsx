import { useEffect, useState } from "react"

export function Validacao() {

    const [formdata, setFormdata] = useState({
        nome: '',
        email: '',
        idade: ''
    })
    const [message, setMessage] = useState(null)


    useEffect(() => {

        const isError = Object.values(formdata).reduce((totalizador, item) => {
            if(!item) totalizador += 1
            return totalizador
        }, 0)
        

        if(isError > 0) {
            setMessage('Todos os campos são obrigatórios!')
        } else {
            setMessage(null)
        }
        
    }, [formdata])

    return (
        <div className="container form">
             <h1>Validação</h1>
            <form  className="form">
                
                <input 
                    placeholder="Informe seu nome" 
                    type="text" 
                    className="form-control" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, nome: event.target.value }))} />
          
                <input 
                    placeholder="Informe seu e-mail" 
                    type="text" 
                    className="form-control"  
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, email: event.target.value }))}  
                />

                <input 
                    placeholder="Informe sua idade" 
                    type="text" 
                    className="form-control"  
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, idade: event.target.value }))}
                />

                <button className="btn">Cadastrar</button>
            </form>

            <code>
                {message}
            </code>

            
        </div>
    )
}




