import React, { useState } from 'react';

const Accordion = () => {
    // const [showModal, setShowModal] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            'id':1,
            'span': 'What is Flowbit',
            'p1':'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
            'p2':'Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.'
        },
        {
            'id':2,
            'span':'What is Flowbit React',
            'p1':'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
            'p2':'Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.'
        }
    ]
    return (
        <div>
            {items.map((item,index)=>(
                <div className='' key={index}>
                    <h2>
                        <button 
                            type='button' 
                            onClick={()=>{setOpenIndex(openIndex === index?null:index)}}
                            className='flex justify-between w-full p-4 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl rtl:text-right gap-3 items-center'
                            >
                            <span>{item.span}</span>
                            <svg
                                className={`w-3 h-3 rotate-180 shrink-0 ${openIndex === index?'rotate-0 text-green-500':'rotate-180'}`}
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                    </h2>
                    {openIndex === index && ( 
                        <div className=''>
                            <div className='p-5 border border-b-0 border-gray-200 text-gray-500 dark:border-gray-700 dark:bg-gray-900'>
                                <p className='mb-2 dark:text-gray-400'>{item.p1}</p>
                                <p className='dark:text-gray-400'>Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                    )}
                    
                    <h2></h2>
                </div>
            ))}
        </div>
        
        
    );
};

export default Accordion;




// Single Accordian

// import React, { useState } from 'react';

// const Accordion = () => {
//     const [showModal, setShowModal] = useState(false);
//     return (
//         <div className=''>
//             <h2>
//                 <button 
//                     type='button' 
//                     onClick={()=>{setShowModal(!showModal)}}
//                     className='flex justify-between w-full p-4 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl rtl:text-right gap-3 items-center'
//                     >
//                     <span>What is Flowbit</span>
//                     <svg
//                         className={`w-3 h-3 rotate-180 shrink-0 ${showModal?'rotate-0 text-green-500':'rotate-180'}`}
//                         aria-hidden="true" 
//                         xmlns="http://www.w3.org/2000/svg" 
//                         fill="none" viewBox="0 0 10 6">
//                         <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
//                     </svg>
//                 </button>
//             </h2>
//             {showModal && ( 
//                 <div className=''>
//                     <div className='p-5 border border-b-0 border-gray-200 text-gray-500 dark:border-gray-700 dark:bg-gray-900'>
//                         <p className='mb-2 dark:text-gray-400'>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
//                         <p className='dark:text-gray-400'>Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
//                     </div>
//                 </div>
//             )}
            
//             <h2></h2>
//         </div>
//     );
// };

// export default Accordion;