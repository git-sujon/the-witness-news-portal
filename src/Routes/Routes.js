import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Main from '../LayOut/Main';
import Catagories from '../Pages/Caatagory/Catagories/Catagories';
import Home from '../Pages/Home/Home';
import News from '../Pages/News/News/News';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/catagories/:id',
                element:<Catagories></Catagories>
            },
            {
                path: '/news/:id',
                element:<News></News>
            },
            
        ]
    },
])

export default Routes;