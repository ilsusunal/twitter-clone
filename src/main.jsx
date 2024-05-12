import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render( 
<BrowserRouter>
        <QueryClientProvider client={queryClient}>
                <UserContextProvider>
                        <App />
                </UserContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
</BrowserRouter>      
)
