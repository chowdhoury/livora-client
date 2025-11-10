import React from 'react';

const Slide = ({item}) => {
    console.log(item);
    return (
        <div>
            <img src={item} className='w-full h-[800px] object-cover' alt="" />
        </div>
    );
};

export default Slide;