import React from 'react';
import ThemeToggle from '../components/Theme/ThemeToggle';

const FlowbiteIcons = () => {
    return (
        // <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white flex items-center justify-center">
        //    <ThemeToggle />
        // </div>

        <div className='antialiased'>
            <div className='_next'>
                <div className='flex flex-col'>
                    <header className='sticky top-0 z-40 mx-auto w-full bg-white dark:bg-gray-900'>
                        <div id='banner' tabIndex='-1' className='z-50 flex justify-center px-4 py-3 border border-b border-gray-200 bg-gray-50 dark:border-gray-500 lg:py-4 dark:bg-gray-700'>
                            <div className='items-center md:flex'>
                                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                                    <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>
                                        Hi!
                                    </span>
                                    This is for learning purpose!!!
                                    <a className='inline-flex items-center ml-2 text-sm font-medium text-blue-600 hover:underline cursor-pointer'>
                                        Check me
                                        <svg className="w-3 h-3 ml-1.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='w-full px-3 py-3 mx-auto lg:flex lg:justify-between max-w-7xl lg:px-3'>
                            <div className=''>

                            </div>
                            <div>

                            </div>
                            
                        </div>
                    </header>
                </div>
            </div>

        </div>

    );
};

export default FlowbiteIcons;