import React from 'react';
import SingleData from '../SingleData/SingleData';

const Card = (props) => {
    const {data, showAll} = props;

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12 py-4'>
                {
                    data.slice(0, showAll ? data.length : 6).map( (singleData) => <SingleData singleData={singleData} key={singleData.id} />)
                }
            </div>
        </>
    );
};

export default Card;