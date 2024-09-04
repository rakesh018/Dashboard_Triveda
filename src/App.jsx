import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './pages/Sidebar'
import ClientsDashboard  from './pages/ClientsDashboard'
import WebsiteDashboard from './pages/WebsiteDashboard'
import Jobs from './pages/Jobs'
export default function App() {
  return (
   <BrowserRouter>
  <div className='flex '>
    <Sidebar></Sidebar>
    <Routes>
    <Route path='/' element={<ClientsDashboard/>}/>
    <Route path='/websitedasboard' element={<WebsiteDashboard/>}/>
    <Route path='/jobs' element={<Jobs/>}/>

   </Routes>
  </div>
   </BrowserRouter>
  )
}