import { Contador } from "./components/contador"
import { Noticia } from "./components/apiNoticia"
import { Estado }from "./components/estado"
import { Validacao } from './components/FormValidacao'
import { InputControlado } from "./components/InputControlado"
import './App.css'
import { Footer } from "./components/footer"

function App() {
 
  

  return (
    <>
     <Contador></Contador>
     <Noticia></Noticia>
     <Estado></Estado>
     <Validacao></Validacao>
     <InputControlado></InputControlado>
   <Footer></Footer>
    </>
  )
}

export default App
