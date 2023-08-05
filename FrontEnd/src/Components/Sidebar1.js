import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LogOutAction } from "../Redux/action";



function Sidebar() {
const dispatch= useDispatch();
const navigate = useNavigate();
    const logOutUser= ()=>{
        dispatch(LogOutAction())
        navigate('/');
        localStorage.removeItem('login');
    }
    return (
        <>
            <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0">
            </div>
            <div className="bg-white "></div>
            
                <div className="flex-col flex  ">
                    <div className="w-50 border-b-2 border-gray-200">
                    </div>
                    <div className="flex h-screen bg-white shadow overflow-x-hidden">
                        <div className="bg-white lg:flex md:w-52 md:flex-col hidden">
                            <div className="flex-col pt-5 flex overflow-y-auto">
                                <div className="h-full flex-col justify-between px-4 flex">
                                    <div className="space-y-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            <Link to={'dashboard'} className="font-bold text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span>Dashboard</span>
                                            </Link>
                                            <Link to={'qoutations'} className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span>Qoutations</span>
                                            </Link>
                                           
                                        </div>
                                        <div>
                                            <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Data</p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">
                                            <Link to={'productsadmin'} className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span>Products</span>
                                            </Link>
                                            
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Admin Area</p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">
                                            <Link to={'users'} className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span>Users</span>
                                            </Link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 pb-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            
                                            <button onClick={logOutUser} className="font-medium text-sm items-center rounded-lg text-red-500 px-4 py-2.5 flex  transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                    
                
                </div>
                {/* <Outlet /> */}
            </>
        

    );
}

export default Sidebar;