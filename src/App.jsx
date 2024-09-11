import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './pages/Sidebar'
import ClientsDashboard  from './pages/ClientsDashboard'
import WebsiteDashboard from './pages/WebsiteDashboard'

import FQA from './pages/FQA'
import Clients from './pages/Clients'
import Services from './pages/Services'
export default function App() {
  return (
   <BrowserRouter>
  <div className='flex bg-gray-950'>
    <Sidebar></Sidebar>
    <Routes>
    <Route path='/' element={<ClientsDashboard/>}/>
    <Route path='/websitedashboard' element={<WebsiteDashboard/>}/>

    <Route path='/websitedashboard/clients' element={<Clients/>}/>
    <Route path='/websitedashboard/services'element={<Services/>}></Route>
    <Route path='/websitedashboard/fqas'element={<FQA/>}></Route>

   </Routes>
  </div>
   </BrowserRouter>
  )
}