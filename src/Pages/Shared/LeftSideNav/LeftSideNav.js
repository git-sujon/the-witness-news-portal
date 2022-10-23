import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([])
    
    useEffect(()=> {
        fetch(`https://the-witness-server.vercel.app/news-catagories`)
        .then(res => res.json())
        .then(data => setCatagories(data))    

    }, [])


    return (
        <div>
            <h4>All Catagories</h4>
            <hr/>
            {
                catagories.map(catagory => <p key={catagory.id}>
                    <Link to={`catagories/${catagory.id}`}>{catagory.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;