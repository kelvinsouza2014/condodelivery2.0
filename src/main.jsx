import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Initial from './routes/Initial.jsx'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import Authentication from './routes/Authentication.jsx'
import Orders from './routes/Orders.jsx'
import NewOrder from './routes/NewOrder.jsx'
import EditOrder from './routes/EditOrder.jsx'
import DeleteOrder from './routes/DeleteOrder.jsx'
import GlobalStyle from './css/GeneralStyle.jsx'

const router = createBrowserRouter([
  {
    // Rota principal / Pai
    path:'/', element:<App />,
    // Rota de erro
    errorElement:<Error />,
    
    // Rotas filhas
    children: [
      {index:true, element:<Initial />}, // Rota inicial
      {path:'/Login', element:<Login />},
      {path:'/Register', element:<Register />},
      {path:'/Authentication', element:<Authentication />},
      {path:'/Orders', element:<Orders />},
      {path:'/NewOrder', element:<NewOrder />},
      {path:'/EditOrder/:id', element:<EditOrder />},
      {path:'/DeleteOrder/:id', element:<DeleteOrder />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>,
)
