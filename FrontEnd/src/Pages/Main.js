import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import VisitorHome from './VisitorPage/Home'
import Services from './VisitorPage/Services'
import Products from './VisitorPage/Products'
import MarketPlace from './VisitorPage/MarketPlace'
import CompanyProfile from './VisitorPage/CompanyProfile'
import Qoutations from './Qoutations/Qoutation'
import Dashboard from './Dashboard'
import Users from './Users/Users'
import NewUser from './Users/NewUser'
import AllUsers from './Users/AllUsers'
import UpdateUser from './Users/UpdateUser'
import NewQoute from './Qoutations/NewQoute'
import AllQoutes from './Qoutations/AllQoutes'
import LoginPage from './LoginPage'
import AdminHome from './AdminHome'
import ProductsAdmin from './Products/ProductsAdmin'
import AllProducts from './Products/AllProducts'
import NewProducts from './Products/NewProducts'
import UpdateProducts from './Products/UpdateProducts'
import Footer from '../Components/Footer'
import Contact from './Contact/Contact'



const Main = () => {
   return (
      <div>
         <Navbar />
         <Routes>
            <Route path="/" element={<VisitorHome />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<MarketPlace />} />
            <Route path="/companyprofile" element={<CompanyProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminHome />} >
               <Route index element={<Dashboard />} />
               <Route path="dashboard" element={<Dashboard />} />

               <Route path="qoutations" element={<Qoutations />} >
                  <Route index element={<AllQoutes />} />
                  <Route path="allQoutes" element={<AllQoutes />} />
                  <Route path="addNewQoute" element={<NewQoute />} />
               </Route>


               <Route path="productsadmin" element={<ProductsAdmin />} >
                  <Route index element={<AllProducts />} />
                  <Route path="allproducts" element={<AllProducts />} />
                  <Route path="newproducts" element={<NewProducts />} />
                  <Route path="updateproducts/:id" element={<UpdateProducts />} />


               </Route>
               <Route path="users" element={<Users />} >
                  <Route index element={<AllUsers />} />
                  <Route path="allusers" element={<AllUsers />} />
                  <Route path="updateuser/:id" element={<UpdateUser />} />
                  <Route path="adduser" element={<NewUser />} />
               </Route>


            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={< VisitorHome />} />
         
         </Routes>
<Footer />

      </div>
   )
};

export default Main