import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import HomeNormal from './Components/HomeNormal.jsx'
import HomeUser from './Components/HomeUser.jsx'
import Owner from './Components/Owner.jsx'
import HomeAdmin from './Components/HomeAdmin.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeNormal/>
  },
  {
    path: '/homeuser',
    element: <HomeUser/>
  },
  {
    path: '/owner',
    element: <Owner/>
  },
  {
    path: '/homeadmin',
    element: <HomeAdmin/>
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
