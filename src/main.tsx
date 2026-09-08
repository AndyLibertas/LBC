import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LbcWebsite from './base.tsx'
import Events from './pages/Events.tsx'
import Join from './pages/Join.tsx'
import Bookings from './pages/Bookings.tsx'
import Articles from './pages/Articles.tsx'
import Ethos from './pages/Ethos.tsx'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <LbcWebsite /> },
  { path: '/events', element: <Events /> },
  { path: '/join', element: <Join /> },
  { path: '/bookings', element: <Bookings /> },
  { path: '/articles', element: <Articles /> },
  { path: '/ethos', element: <Ethos /> },
  // Unknown paths fall back to the home page rather than a dead end.
  { path: '*', element: <LbcWebsite /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
