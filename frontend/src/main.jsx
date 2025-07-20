import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import AddCoffee from './pages/AddCoffee.jsx'
import ContextApi from './utils/context/ContextApi.jsx'
import CoffeeDetail from './pages/CoffeeDetail.jsx'
import SignUp from './pages/SignUp.jsx'
import LogIn from './pages/LogIn.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/add-coffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"/coffees/:id",
        element:<CoffeeDetail></CoffeeDetail>,
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/login",
        element:<LogIn/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
)
