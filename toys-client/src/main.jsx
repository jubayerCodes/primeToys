import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import AuthProvider from './providers/AuthProvider'
import 'aos/dist/aos.css';
import '@smastrom/react-rating/style.css'
import 'keen-slider/keen-slider.min.css'

export const TitleContext = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitleContext.Provider value={'PrimeToys'}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </TitleContext.Provider>
  </React.StrictMode>,
)
