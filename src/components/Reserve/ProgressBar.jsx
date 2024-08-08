import React from 'react';

const ProgressBar = () => {
    return (
        <div className='w-[70%] mx-auto'>
            <div className='my-20'>
                <h1 className='text-2xl md:text-5xl uppercase text-purple-500 font-extrabold animate-pulse mt-20 my-10'> Progress bar in tailwind css </h1>
                
                <div className='bg-purple-500/20 h-4 rounded-full'>
                    <div className='bg-purple-500 w-[70%] h-full text-xs flex justify-center items-center text-white font-bold'>70%</div>
                </div>
            </div>
        </div>
        
    );
};

export default ProgressBar;