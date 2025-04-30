
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Nopage from './Pages/Nopage'
import Userlogin from './User/Userlogin'
import Adminlogin from './Admin/Adminlogin'

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='userlogin' element={<Userlogin/>}/>
    <Route path='adminlogin' element={<Adminlogin/>}/>
    <Route path='*' element={<Nopage/>}/>
    

    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
