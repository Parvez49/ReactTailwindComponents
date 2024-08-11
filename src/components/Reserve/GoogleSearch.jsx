import React from 'react';

const GoogleSearch = () => {
    return (
        <div className='flex items-center justify-center h-[50vh] border'>
            <div className='w-[50%] relative'>
                <input 
                    type="text"
                    placeholder="Search Google or type a URL"
                    style={{
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none'
                    }}
                    className="peer w-full bg-gray-800 rounded-3xl px-10 text-white py-3 focus:rounded-bl-none focus:rounded-br-none focus:placeholder:text-transparent"
                />
                <div className='hidden peer-focus:block border-none absolute w-full bg-gray-800 text-white rounded-bl-3xl rounded-br-3xl'>
                    <ul className='px-4 py-2'>
                        <li className='p-2'>search1</li>
                        <li className='p-2'>search2</li>
                        <li className='p-2'>search3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GoogleSearch;