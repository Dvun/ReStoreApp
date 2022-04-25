import React, {Suspense} from 'react'
import './App.scss'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import AppRoutes from '../components/routes'
import {ToastContainer} from 'react-toastify'

const App = () => {

  return (
    <>
      <Navbar/>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes/>
        </Suspense>
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  )
}

export default App
