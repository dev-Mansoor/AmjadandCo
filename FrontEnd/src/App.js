import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Main from './Pages/Main';



const App = () => {

  const loginSt = useSelector(state=>state);
  const login = loginSt.LogRed;
  if(login) {
    localStorage.setItem('login', login);
  }

   return (
    <div> 
     <Main /> 
  
     

    </div>
  )
}

export default App