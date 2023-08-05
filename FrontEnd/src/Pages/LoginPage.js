import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LogInAction } from '../Redux/action'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

  // let result = useSelector(state=>state.logRed)
const navigate = useNavigate();
  let dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [usersData, setUsersdata] = useState([]);
  const [Login , setLogin] = useState(false);
  

    const getAllUsers = async () => {
      let res = await fetch('http://localhost:8000/getuser')
      res = await res.json();
      setUsersdata(res);
  }

  const registerUser =  (e) => {
    e.preventDefault();
    const user =   usersData.find((x)=> x.username === username) 
    const pass = usersData.find((x)=>x.password === password)

    if(user && pass) 
    {
      
      console.log("Login successful");
      setLogin(!Login);
      dispatch(LogInAction());
      navigate('/admin')
    }
    else{
    alert("Login failed");  
    } 
   }

  useEffect(()=>{
      getAllUsers();
  },[])

  return (

    <div className='mt-16 p-14 container m-10 '>
      <div className="h-screen flex shadow-md rounded-sm">
        <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Welcome Back</h1>
            <p className="text-white mt-1"></p>
            <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center bg-white">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input  onChange={(e)=>setUsername(e.target.value)} 
                value={username}
                 className="pl-2 outline-none border-none" type="text" name="username"  placeholder="Email Address" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input  onChange={(e)=>setPassword(e.target.value)} 
                value={password} 
                 className="pl-2 outline-none border-none" type="password" name="password"  placeholder="Password" />
            </div>
            <button onClick={registerUser} type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
          </form>
        </div>
      </div>


    </div>
  )
}

export default LoginPage