import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Main from '../LayOut/Main';
import Catagories from '../Pages/Caatagory/Catagories/Catagories';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import News from '../Pages/News/News/News';
import TermsAndCondition from '../Pages/others/TermsAndCondition/TermsAndCondition';
import Profile from '../Pages/Profile/Profile';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('https://the-witness-server.vercel.app/news')
            },
            {
                path:'/catagories/:id',
                element:<Catagories></Catagories>,
                loader:({params})=> fetch(`https://the-witness-server.vercel.app/catagories/${params.id}`)
            },
            {
                path: '/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=> fetch(`https://the-witness-server.vercel.app/news/${params.id}`)
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: '/login',
                element:<Login></Login>,
            },
            {
                path: '/register',
                element:<Register></Register>,
            },
            {
                path: '/terms',
                element:<TermsAndCondition></TermsAndCondition>,
            },
            
            
        ]
    },
])

export default Routes;