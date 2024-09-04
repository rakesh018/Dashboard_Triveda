import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './pages/Sidebar'
import Dashboard  from './pages/Dashboard'
export default function App() {
  return (
   <BrowserRouter>
  <div className='flex '>
    <Sidebar></Sidebar>
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>}>
    </Route>
   </Routes>
  </div>
   </BrowserRouter>
  )
}