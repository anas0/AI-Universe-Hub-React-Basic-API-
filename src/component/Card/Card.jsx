import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]); 

    useEffect( ()=>{
        const loadData = async() => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
            const data = await res.json();
            setData(data.data.tools);
        }

        loadData()
    }, []);
    
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12 py-4'>
                {
                    data.map( (singleData) => <SingleData singleData={singleData} key={singleData.id} />)
                }
            </div>
        </>
    );
};

export default Card;