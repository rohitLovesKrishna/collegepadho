import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Loader from './components/Loader';
import BASE_URL from './components/constant';

const PrivateRoutes = () => {
    const navigate = useNavigate();
  const [auth,setAuth]=useState(2);
//   const [showLoader,setShowLoader]=useState(true);
  console.log(auth);

    const checkLocalStorage =async ()=>{
        const isValid = await JSON.parse(localStorage.getItem('IS_VALID'));
        if(isValid==0){
            setAuth(0);
        }
        if(isValid==1){
            setAuth(1);
        }
    }
  useEffect(()=>checkLocalStorage,[]);
  const callApi = ()=>{
    axios.get(BASE_URL+'/api/validate').then(async (res)=>{
        console.log(res)
      if(res.data.message=='Authenticated'){
        await localStorage.setItem('IS_VALID',JSON.stringify(1));
        setAuth(1);
      }
      if(res.data.message=='unauthorized'){
        await localStorage.setItem('IS_VALID',JSON.stringify(0));
        setAuth(0);
      }
    }).catch((err)=>{console.log(err)})
  }
  useEffect(callApi,[])
  
  if(auth==1){
      return (
        <Outlet/>
      )
  }
  if(auth==0){
    return (
        <Navigate to="/admin/login"/>
      )
  }
  if(auth==2){
    return (
        <Loader/>
      )
  }
}

export default PrivateRoutes