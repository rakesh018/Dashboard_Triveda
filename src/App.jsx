import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './pages/Sidebar'
import ClientsDashboard  from './pages/ClientsDashboard'
import WebsiteDashboard from './pages/WebsiteDashboard'

import FQA from './pages/subComponents/FQA'
import Clients from './pages/subComponents/Clients'
import Services from './pages/subComponents/Services'
export default function App() {
  return (
   <BrowserRouter>
  <div className='flex '>
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