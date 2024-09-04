import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './pages/Sidebar'
import Home from './pages/Home'
export default function App() {
  return (
   <BrowserRouter>
  <div className='flex '>
    <Sidebar></Sidebar>
    <Routes>
    <Route path='/' element={<Home/>}>
      
    </Route>
   </Routes>
  </div>
   </BrowserRouter>
  )
}