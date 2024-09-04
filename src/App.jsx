import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './pages/Sidebar'
import ClientsDashboard  from './pages/ClientsDashboard'
export default function App() {
  return (
   <BrowserRouter>
  <div className='flex '>
    <Sidebar></Sidebar>
    <Routes>
    <Route path='/clientsdashboard' element={<ClientsDashboard/>}>
    </Route>
   </Routes>
  </div>
   </BrowserRouter>
  )
}