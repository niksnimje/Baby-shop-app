import React from 'react'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import ForgotPass from './Pages/ForgotPass'
import Product from './Pages/Product'
import Privateroutes from './Components/Privateroutes'
import DescriptionPage from './Pages/DescriptionPage'
import AddProduct from './Pages/AddProduct'

function AllRoutes() {
  return (
    <>
        <Navigation />
    <Routes>
        <Route  path="/" element={<Home />} />
        {/* <Route  path="/user" element={<User />} /> */}
        {/* <Route  path="/rigister" element={<Rigister />} /> */}
        <Route  path="/forgotpassword" element={<ForgotPass />} />
        <Route  path="/addproduct" element={<AddProduct />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/description/:id" element={<DescriptionPage />} />
        <Route  path="/product" element={
        <Privateroutes>
          <Product />
        </Privateroutes>} />

    </Routes> 
        <Footer />
    </>
  )
}

export default AllRoutes