import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvinder } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import Authentication from './routes/Authentication.jsx'
import Orders from './routes/Orders.jsx'
import NewOrder from './routes/NewOrder.jsx'

const router = createBrowserRouter([
  {
    // Rota principal / Mãe
    path:'/', element:<App />,
    // Rota de erro
    errorElement:<Error />,

    // Rotas filhas
    children:[
      {path:'/Login', element:<Login />},
      {path:'/Register', element:<Register />},
      {path:'/Authentication', element:<Authentication />},
      {path:'/Orders', element:<Orders />},
      {path:'/NewOrder', element:<NewOrder />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvinder router={router} />
  </StrictMode>,
)
