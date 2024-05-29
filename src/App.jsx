import { RouterProvider } from 'react-router-dom'

import { router } from './Router/Router'

function App({ children }) {

  return (
    <div className='dark:bg-white'>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
    </div>

  )
}

export default App
