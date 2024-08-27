import {Routes, Route, Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import ListaProdutos from '../components/ListaProdutos'


function AppRoutes(){

    const isAuthenticated= false
    
    function loginRedirect(component) {
        if(isAuthenticated) {
          return <Navigate to='/home' replace/>
        }
    
        return component
    
      }

      return(
        <>
        <Routes>
        <Route path='/login' element={loginRedirect(<Login/>)}/>
        <Route path='/cadastro' element={loginRedirect(<Signup/>)}/>
        <Route path='/' Component={Home}/>
        <Route path='/home' Component={Home}/>
       
     </Routes>
        </>
      )
    
}

export default AppRoutes