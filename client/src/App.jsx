
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
// import Nopage from './Pages/Nopage'
import Userlogin from './User/Userlogin'
import Adminlogin from './Admin/Adminlogin'
import AdminDashboard from './Admin/AdminDashboard'
import AddUser from './Admin/AddUser'
import DisplayUser from './Admin/DisplayUser'
import UpdateTask from './Admin/UpdateTask'
import UserDashboard from './User/UserDashboard'
import UserTaskDisplay from './User/UserTaskDisplay'

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
    {/* <Route path='*' element={<Nopage/>}/> */}
    

    </Route>
   </Routes>
   <Routes>
    <Route path='admindashboard' element={<AdminDashboard/>}>
    <Route path='registration' element={<AddUser/>}/>
    <Route path='userdisplay' element={<DisplayUser/>}/>
    <Route path='taskdisplay' element={<UpdateTask/>}/>  
    </Route> 
   </Routes>

   <Routes>
    <Route path='userdashboard' element={<UserDashboard/>}>
    <Route path='userTaskDisplay' element={<UserTaskDisplay/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
