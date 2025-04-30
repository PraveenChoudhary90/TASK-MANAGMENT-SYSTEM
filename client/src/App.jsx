
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Addtotask from './Pages/Addtotask'
import DisplayTask from './Pages/DisplayTask'
import Admin from './Pages/Admin'
import UpdateTask from './Pages/UpdateTask'
import Nopage from './Pages/Nopage'

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='addtotask' element={<Addtotask/>}/>
    <Route path='displaytask' element={<DisplayTask/>}/>
    <Route path='admin' element={<Admin/>}/>
    <Route path='updatetask' element={<UpdateTask/>}/>
    <Route path='*' element={<Nopage/>}/>
    

    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
