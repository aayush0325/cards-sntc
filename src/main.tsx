import React from 'react'
import ReactDOM from 'react-dom/client'
import { dark } from '@clerk/themes'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import AppRoutes from './AppRoutes'
import  { Redirect } from 'react-router-dom'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

// redirect to localhost:8000, in any case

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Redirect to='http://localhost:8000' />
  </React.StrictMode>
)
