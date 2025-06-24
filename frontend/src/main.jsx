import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import AddCoffee from './pages/AddCoffee.jsx'
import ContextApi from './utils/context/ContextApi.jsx'
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
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
  </StrictMode>,
)
