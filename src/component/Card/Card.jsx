import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = (props) => {
    const {data, showAll} = props;
    const [singleData, setSingleData] = useState({});
    const [uniqueId, setUniqueId] = useState(null);
    
    useEffect( ()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data));
    }, [uniqueId]);

    //console.log(singleData);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12 py-4'>
                {
                    data.slice(0, showAll ? data.length : 6).map( (singleData) => 
                    <SingleData 
                        singleData={singleData} 
                        setUniqueId={setUniqueId} 
                        key={singleData.id}
                    />)
                }
            </div>

            <Modal singleData={singleData} />
        </>
    );
};

export default Card;