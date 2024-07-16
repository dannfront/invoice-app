import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast';


import Login from "./pages/Login"
import Register from "./pages/Register"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import Invoice from "./pages/Invoice"
import Protected from "./auth/Protected"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
    }
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Protected>
          <Home />
        </Protected>
      },
      {
        path: "/invoice/:id",
        element: 
        <Protected>

          <Invoice />,
        </Protected>
      }

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false}/>
      <Toaster
        position="top-right"
        toastOptions={
          {
            duration:5000,
            iconTheme:"#7C5DFA",
          }
        }
      />
    </QueryClientProvider>
  )
}

export default App
