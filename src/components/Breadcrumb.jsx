



import React from 'react';

const Breadcrumb = () => {
    return (
        <nav aria-label="Breadcrumb">
            <ol class="flex space-x-2 text-gray-700">
                <li>
                    <a href="#" class="hover:text-blue-500">Home</a>
                </li>
                <li>
                    <span>/</span>
                </li>
                <li>
                    <a href="#" class="hover:text-blue-500">Category</a>
                </li>
                <li>
                    <span>/</span>
                </li>
                <li>
                    <span class="font-medium text-gray-900">Current Page</span>
                </li>
            </ol>
        </nav>

    );
};

export default Breadcrumb;














// import React from 'react';

// const Breadcrumb = () => {
//     return (
//         <nav className='flex'>
//             <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
//                 <li className='inline-flex items-center'>
//                     <a className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600'>
//                         <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                             <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
//                         </svg>
//                         Home
//                     </a>
//                 </li>
//                 <li>
//                     <div class="flex items-center">
//                         <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
//                         </svg>
//                         <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
//                     </div>
//                     </li>
//                     <li aria-current="page">
//                     <div class="flex items-center">
//                         <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
//                         </svg>
//                         <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
//                     </div>
//                 </li>
//             </ol>
//         </nav>
//     );
// };

// export default Breadcrumb;