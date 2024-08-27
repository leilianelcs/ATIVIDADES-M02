import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import {useState} from 'react'
import Login from './pages/Login'
import ComponenteModal from './components/Modal'
import ListaProdutos from './components/ListaProdutos'
import AppRoutes from './routes/routes'

function App() {

  const [showModal, setShowModal] = useState(true);
  const [isAdult, setIsAdult] = useState(false);

  const handleConfirm = () => {
    setIsAdult(true);
    setShowModal(false);
  };

  const handleClose = () => {
    setIsAdult(false);
    setShowModal(false);
  };
  const isAuthenticated = false
  return (
    <>
     <ComponenteModal show={showModal} onClose={handleClose} onConfirm={handleConfirm} />
     <Router>
      {isAuthenticated ?
      (
        <div className='grid-container'>
          <Login/>
          <AppRoutes/>

        </div>
      )
    :(
      <AppRoutes/>
    )}
     </Router>
     {isAdult && <ListaProdutos />}
    </>
  )
}

export default App
