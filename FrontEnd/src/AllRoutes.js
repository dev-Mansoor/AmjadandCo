// import React from 'react'
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import VisitorHome from './Pages/VisitorPage/Home';

// import Services from './Pages/VisitorPage/Services';
// import Products from './Pages/VisitorPage/Products';
// import MarketPlace from './Pages/VisitorPage/MarketPlace';
// import CompanyProfile from './Pages/VisitorPage/CompanyProfile';
// import AdminHome from './Pages/AdminHome';
// import LoginPage from './Pages/LoginPage';
// import UserPanelHome from './Pages/UserPanelHome';
// import Dashboard  from './Pages/Dashboard'
// import Qoutations from './Pages/Qoutations/Qoutation';
// import AllQoutes from './Pages/Qoutations/AllQoutes';
// import Bills from './Pages/Bills/Bills';
// import Users from './Pages/Users/Users';
// import AllUsers from './Pages/Users/AllUsers';
// import UpdateUser from './Pages/Users/UpdateUser';
// import NewUser from './Pages/Users/NewUser';
// import NewQoute from './Pages/Qoutations/NewQoute';
// import Navbar from './Pages/VisitorPage/VisitorHome';




// const AllRoutes = () => {
//     return (
//         <div>
//             <Navbar />
//             <Routes>
//                 <Route path="/loginpage" element={<LoginPage />} />
//                 <Route path="/" element={<VisitorHome />} />
//                 <Route path="/services" element={<Services />} />
//                 <Route path="/products" element={<Products />} />
//                 <Route path="/clients" element={<MarketPlace />} />
//                 <Route path="/companyprofile" element={<CompanyProfile />} />
//                 <Route path="/admin" element={<AdminHome />} >
//                     <Route path="/userpanel" element={<UserPanelHome />} >
//                         <Route index element={<Dashboard />} />
//                         <Route path="dashboard" element={<Dashboard />} />
//                         <Route path="qoutations" element={<Qoutations />} >
//                             <Route index element={<AllQoutes />} />
//                             <Route path="allQoutes" element={<AllQoutes />} />
//                         </Route>
//                         <Route path="bills" element={<Bills />} />
//                         <Route path="users" element={<Users />} >
//                             <Route index element={<AllUsers />} />
//                             <Route path="allusers" element={<AllUsers />} />
//                             <Route path="updateuser/:id" element={<UpdateUser />} />
//                             <Route path="adduser" element={<NewUser />} />
//                         </Route>
//                         <Route path="addNewQoute" element={<NewQoute />} />
//                     </Route>
//                 </Route>
//                 <Route path="*" element={<div>Page Not Found </div>} />

//             </Routes>

//         </div>
//     )
// }

// export default Routes