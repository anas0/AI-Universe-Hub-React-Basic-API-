import React from 'react';

const Button = (props) => {
    return (
        <div className='text-center'>
            <button className="btn btn-accent my-3">{props.children}</button>
        </div>
    );
};

export default Button;