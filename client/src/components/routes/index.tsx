import React, {lazy} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

const HomePage = lazy(() => import('../../pages/homePage'))
const ContactPage = lazy(() => import('../../pages/contactPage'))
const AboutPage = lazy(() => import('../../pages/aboutPage'))
const ProfilePage = lazy(() => import('../../pages/profilePage'))
const ShoppingCartPage = lazy(() => import('../../pages/shoppingCartPage'))
const LoginPage = lazy(() => import('../../pages/loginPage'))
const RegisterPage = lazy(() => import('../../pages/registerPage'))
const ProductDetailsPage = lazy(() => import('../../pages/productDetailsPage'))


const AppRoutes = () => {
  const user = true

  return (
    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="contact" element={<ContactPage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="product/:id" element={<ProductDetailsPage/>}/>
      <Route path={user ? '/' : 'login'} element={<LoginPage/>}/>
      <Route path={user ? '/' : 'register'} element={<RegisterPage/>}/>

      <Route element={<PrivateRoutes user={user}/>}>
        <Route path="profile" element={<ProfilePage/>}/>
        <Route path="shopping-cart" element={<ShoppingCartPage/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Route>

      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default AppRoutes