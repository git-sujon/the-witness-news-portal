import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';




const PrivateRouteContext=createContext() 

const PrivateRoute = ({children}) => {
    const location= useLocation()
    // const navigate= useNavigate()

    const {user, loading}= useContext(AuthContext)
    // console.log(user)
    if(loading) {
       return <Spinner animation="grow" variant="dark" />
    }
    
    if(!user){
       return <Navigate to='/login' state= {{from : location}} replace ></Navigate>
    }
    return children;


   
};

export default PrivateRoute;