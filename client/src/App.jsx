import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import Promotion from './pages/Promotion';

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/menu' element={ <MenuPage/>} />
    <Route path='/promotion' element={ <Promotion/>} />
    </Routes>

    </>
  )
}

export default App
