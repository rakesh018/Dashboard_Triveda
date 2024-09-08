import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './pages/Sidebar'
import ClientsDashboard  from './pages/ClientsDashboard'
import WebsiteDashboard from './pages/WebsiteDashboard'
import Jobs from './pages/Jobs'
import Clients from './pages/subComponents/Clients'
export default function App() {
  return (
   <BrowserRouter>
  <div className='flex '>
    <Sidebar></Sidebar>
    <Routes>
    <Route path='/' element={<ClientsDashboard/>}/>
    <Route path='/websitedashboard' element={<WebsiteDashboard/>}/>

    <Route path='/websitedashboard/clients' element={<Clients/>}/>

   </Routes>
  </div>
   </BrowserRouter>
  )
}