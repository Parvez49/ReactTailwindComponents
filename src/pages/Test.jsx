import React from 'react';

const Test = () => {
    return (
        <div id='top' className='w-full border h-full border-blue-600'>
            <div className='h-20 border bg-gray-400 fixed w-full top-0 opacity-50 '>
                nav        

            </div>
            <div className='content-main mt-20 flex'>
                <section className='left-section border flex-1'>
                    left
                    <div className='h-48 w-48 sticky top-20 bg-lime-200'></div>
                </section>
                <section className='middle-section border flex-1'>
                    middle
                    <div className='h-screen bg-blue-100'></div>
                    <div id='test' className='h-[500px]'>
                         div
                    </div>
                    <div className='h-screen bg-blue-200'></div>
                    <label>
                        <a href='#test'>
                            top
                        </a>
                    </label>
                </section>
                <section className='right border flex-1'>
                    right

                    
                </section>

            </div>
            
        </div>
    );
};

export default Test;