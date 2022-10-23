import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsCard/NewsSummaryCard';

const Catagories = () => {
    const data= useLoaderData()
    // console.log(data)

    return (
        <div>
            {
                data.map(news=> <NewsSummaryCard keys={news._id}  news={news} ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagories;