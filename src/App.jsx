import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './pages/Sidebar'
import ClientsDashboard  from './pages/ClientsDashboard'
import WebsiteDashboard from './pages/WebsiteDashboard'
export default function App() {
  return (
   <BrowserRouter>
  <div className='flex '>
    <Sidebar></Sidebar>
    <Routes>
    <Route path='/' element={<ClientsDashboard/>}/>
    <Route path='/websitedaboard' element={<WebsiteDashboard/>}/>

   </Routes>
  </div>
   </BrowserRouter>
  )
}