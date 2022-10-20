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
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/news')
            },
            {
                path:'/catagories/:id',
                element:<Catagories></Catagories>,
                loader:({params})=> fetch(`http://localhost:5000/catagories/${params.id}`)
            },
            {
                path: '/news/:id',
                element:<News></News>,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            
        ]
    },
])

export default Routes;