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
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <a className="flex items-center justify-between" href="/">
                                        <span>
                                            ic
                                        </span>
                                        <span className="self-center ml-3 text-2xl font-semibold whitespace-nowrap dark:text-white">IconBite</span>
                                    </a>
                                    <div className='hidden md:flex'>
                                        <button className='ml-8 w-64 px-4 py-2 flex items-center justify-between border rounded-lg bg-gray-100'>
                                            <span className='flex items-center'>
                                                <svg width="20" height="20" className="DocSearch-Search-Icon w-3 h-3 mr-2" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                <span className='text-sm text-gray-600'>Search</span>
                                            </span>
                                            <span className='flex items-center gap-1 text-gray-600'>
                                                <kbd>
                                                    <svg width="15" height="15" className="DocSearch-Control-Key-Icon"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg>
                                                </kbd>
                                                <kbd>
                                                    K
                                                </kbd>
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* For Small device */}
                                <div className="flex items-center lg:hidden">
                                    <div className="md:hidden">
                                        <button type="button" className="DocSearch DocSearch-Button" aria-label="Search">
                                            <span className="DocSearch-Button-Container">
                                                <svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                <span className="DocSearch-Button-Placeholder">Search</span>
                                            </span>
                                            <span className="DocSearch-Button-Keys">
                                                <kbd className="DocSearch-Button-Key">
                                                    <svg width="15" height="15" className="DocSearch-Control-Key-Icon"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg>
                                                </kbd>
                                                <kbd className="DocSearch-Button-Key">K</kbd>
                                            </span>
                                        </button>
                                    </div>
                                    <button type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"><path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path></svg>
                                    </button>
                                    <a className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 md:ml-3" href="/login/">
                                        <span className="md:hidden">Login</span>
                                        <span className="hidden md:inline">Sign in</span>
                                        <svg className="hidden w-3 h-3 ml-2 xl:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg>
                                    </a>
                                    <button className="ml-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center justify-center w-10 h-10">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-center w-full lg:w-auto'>
                                <ul className='flex flex-col py-2 lg:py-0 lg:flex-row lg:self-center w-full lg:w-auto'>
                                    <li><a className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Docs</a></li>
                                    <li><a className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Blocks</a></li>
                                    <li><a className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Figma</a></li>
                                    <li><a className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Icons</a></li>
                                    <li><a className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Blog</a></li>
                                    <li><a className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Pro Version</a></li>
                                    <li><a className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Pricing & FAQ</a></li>
                                </ul>
                                <div>
                                    <div className="items-center hidden mr-3 lg:flex">
                                        <a href="https://github.com/themesberg/flowbite" className="hidden xl:inline-flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                                            <svg className="w-[1.1rem] h-[1.1rem] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path></svg>
                                        </a>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hidden xl:inline-flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"><path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path></svg>
                                        </a>
                                        <a href="https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A" className="hidden xl:inline-flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14"><path fill-rule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clip-rule="evenodd"></path></svg>
                                        </a>
                                        <button type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"><path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path></svg>
                                        </button>
                                        <a className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 md:ml-3" href="/login/">
                                            <span className="md:hidden">Login</span><span className="hidden md:inline">Sign in</span>
                                            <svg className="hidden w-3 h-3 ml-2 xl:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </header>
                    <main className=''>
                        <section className="px-4 mx-auto max-w-7xl">
                            <div className="grid mt-3 mb-6 lg:gap-8 lg:mt-5 lg:mb-6 xl:grid-cols-3">
                                <div className="col-span-2 mb-2 lg:mb-0">
                                    <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Flowbite Icons - Free and open-source SVG icons</h1>
                                    <p className="text-lg text-gray-500 xl:mr-64 lg:mb-0 dark:text-gray-400">Get started with a collection of 521 free and open-source SVG icons compatible with Flowbite and Tailwind CSS based on solid and outline styles with React (JSX) and Figma support.</p>
                                </div>
                                <div className="lg:ml-auto">
                                    <script id="_carbonads_js" src="//cdn.carbonads.com/carbon.js?serve=CK7D4KQE&amp;placement=flowbitedesign"></script>
                                    <div id="carbonads" className='flex shadow-md'>
                                        <span className='block overflow-hidden relative'>
                                            <span className="carbon-wrap flex">
                                                <a href="https://srv.carbonads.net/ads/click/x/GTND427LCVYI52QICAALYKQUCV7DK53LCYYD6Z3JCA7D653ECWAIP53KFT7DTKJICT7I42QECYYD5K3WC6SI52QKC6SI6KJJCYADTK3EHJNCLSIZ" className="carbon-img" target="_blank" rel="noopener sponsored">
                                                    <img src="https://srv.carbonads.net/static/30242/ede7fb35aca2bc66eccbb76d5096bd48d8104a8d" alt="ads via Carbon" className="border-0 h-24 w-32 max-w-full"  data-no-statview="no"  />
                                                </a>
                                                <a href="https://srv.carbonads.net/ads/click/x/GTND427LCVYI52QICAALYKQUCV7DK53LCYYD6Z3JCA7D653ECWAIP53KFT7DTKJICT7I42QECYYD5K3WC6SI52QKC6SI6KJJCYADTK3EHJNCLSIZ" className="carbon-text text-left text-sm p-2" target="_blank" rel="noopener sponsored">
                                                    Redesign the way you jam with FigJam AI.
                                                </a>
                                            </span>
                                            <a href="http://carbonads.net/?utm_source=flowbitedesign&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon" className="carbon-poweredby block py-1 px-2 bg-gray-100 text-center uppercase absolute bottom-0 right-0 text-sm" target="_blank" rel="noopener sponsored">ads via Carbon</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='pb-8 bg-white dark:bg-gray-900 lg:pb-24'>
                            <div className='px-4 mx-auto max-w-7xl'>
                                <div className="w-full mb-6">
                                    <div className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 lg:flex-row">
                                        <div className="shrink-0 w-full lg:w-auto lg:flex">
                                            <div className="relative shrink-0 w-full mb-4 lg:mb-0 lg:mr-5 lg:w-64 xl:w-96">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                </div>
                                                <label for="search" className="hidden">Search from 521 icons...:</label>
                                                <input id="search" type="text" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search from 521 icons..." value="" />
                                            </div>
                                            <div className="min-w-[260px] lg:mr-5 mb-3 lg:mb-0">
                                                <div className="w-full flex justify-between items-center">
                                                    <label className="text-sm font-medium text-gray-900 dark:text-gray-300 text-sm font-medium !text-gray-600 dark:!text-gray-400" data-testid="flowbite-label" for="icon-size">Icon size</label>
                                                    <span className="text-sm font-medium !text-gray-600 dark:!text-gray-400">37px</span>
                                                </div>
                                                <div data-testid="flowbite-range-slider" className="flex">
                                                    <div className="relative w-full">
                                                        <input type="range" className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 h-2" id="icon-size" min="12" max="48" value="20" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="min-w-[260px] lg:mr-5 mb-3 lg:mb-0">
                                                <div className="w-full flex justify-between items-center">
                                                    <label className="text-sm font-medium text-gray-900 dark:text-gray-300 text-sm font-medium !text-gray-600 dark:!text-gray-400" data-testid="flowbite-label" for="stroke-width">Stroke width</label>
                                                    <span className="text-sm font-medium !text-gray-600 dark:!text-gray-400">0.1</span>
                                                </div>
                                                <div data-testid="flowbite-range-slider" className="flex">
                                                    <div className="relative w-full">
                                                        <input type="range" className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 h-2" id="stroke-width" min="1" max="30" value="1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 flex justify-center items-center">
                                            <div className="w-fit" data-testid="flowbite-tooltip-target">
                                                <button type="button" className="text-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-1 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                                    <svg aria-hidden="true" className="text-gray-500 dark:text-gray-400 w-5 h-5" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22913 0H1.18746C0.899811 0 0.666626 0.223858 0.666626 0.5V1.5C0.666626 1.77614 0.899811 2 1.18746 2H2.22913C2.51677 2 2.74996 1.77614 2.74996 1.5V0.5C2.74996 0.223858 2.51677 0 2.22913 0Z" fill="currentColor"></path><path d="M2.22913 4H1.18746C0.899811 4 0.666626 4.22386 0.666626 4.5V5.5C0.666626 5.77614 0.899811 6 1.18746 6H2.22913C2.51677 6 2.74996 5.77614 2.74996 5.5V4.5C2.74996 4.22386 2.51677 4 2.22913 4Z" fill="currentColor"></path><path d="M2.22913 8H1.18746C0.899811 8 0.666626 8.22386 0.666626 8.5V9.5C0.666626 9.77614 0.899811 10 1.18746 10H2.22913C2.51677 10 2.74996 9.77614 2.74996 9.5V8.5C2.74996 8.22386 2.51677 8 2.22913 8Z" fill="currentColor"></path><path d="M16.2916 2H5.87496C5.59869 2 5.33374 1.89464 5.13839 1.70711C4.94304 1.51957 4.83329 1.26522 4.83329 1C4.83329 0.734784 4.94304 0.48043 5.13839 0.292893C5.33374 0.105357 5.59869 0 5.87496 0H16.2916C16.5679 0 16.8328 0.105357 17.0282 0.292893C17.2235 0.48043 17.3333 0.734784 17.3333 1C17.3333 1.26522 17.2235 1.51957 17.0282 1.70711C16.8328 1.89464 16.5679 2 16.2916 2Z" fill="currentColor"></path><path d="M16.2916 6H5.87496C5.59869 6 5.33374 5.89464 5.13839 5.70711C4.94304 5.51957 4.83329 5.26522 4.83329 5C4.83329 4.73478 4.94304 4.48043 5.13839 4.29289C5.33374 4.10536 5.59869 4 5.87496 4H16.2916C16.5679 4 16.8328 4.10536 17.0282 4.29289C17.2235 4.48043 17.3333 4.73478 17.3333 5C17.3333 5.26522 17.2235 5.51957 17.0282 5.70711C16.8328 5.89464 16.5679 6 16.2916 6Z" fill="currentColor"></path><path d="M16.2916 10H5.87496C5.59869 10 5.33374 9.89464 5.13839 9.70711C4.94304 9.51957 4.83329 9.26522 4.83329 9C4.83329 8.73478 4.94304 8.48043 5.13839 8.29289C5.33374 8.10536 5.59869 8 5.87496 8H16.2916C16.5679 8 16.8328 8.10536 17.0282 8.29289C17.2235 8.48043 17.3333 8.73478 17.3333 9C17.3333 9.26522 17.2235 9.51957 17.0282 9.70711C16.8328 9.89464 16.5679 10 16.2916 10Z" fill="currentColor"></path></svg>
                                                    <span className="sr-only">Toggle list view</span>
                                                </button>
                                            </div>
                                            <div data-testid="flowbite-tooltip" tabindex="-1" className="absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm transition-opacity duration-300 invisible opacity-0 bg-gray-900 text-white dark:bg-gray-700" className='absolute top-64 left-96' id=":r0:" role="tooltip">
                                                <div className="relative z-20">Toggle list view</div>
                                                <div className="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700" data-testid="flowbite-tooltip-arrow" className='-bottom-1 left-14'>&nbsp;</div>
                                            </div>
                                            <div className="w-fit" data-testid="flowbite-tooltip-target">
                                                <button type="button" className="text-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                                    <svg aria-hidden="true" className="text-gray-500 dark:text-gray-400 w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.61917 0.5H2.0475C1.19284 0.5 0.5 1.19284 0.5 2.0475V5.61917C0.5 6.47383 1.19284 7.16667 2.0475 7.16667H5.61917C6.47383 7.16667 7.16667 6.47383 7.16667 5.61917V2.0475C7.16667 1.19284 6.47383 0.5 5.61917 0.5Z" fill="currentColor"></path><path d="M13.9525 0.5H10.3808C9.52617 0.5 8.83333 1.19284 8.83333 2.0475V5.61917C8.83333 6.47383 9.52617 7.16667 10.3808 7.16667H13.9525C14.8072 7.16667 15.5 6.47383 15.5 5.61917V2.0475C15.5 1.19284 14.8072 0.5 13.9525 0.5Z" fill="currentColor"></path><path d="M5.61917 8.83333H2.0475C1.19284 8.83333 0.5 9.52617 0.5 10.3808V13.9525C0.5 14.8072 1.19284 15.5 2.0475 15.5H5.61917C6.47383 15.5 7.16667 14.8072 7.16667 13.9525V10.3808C7.16667 9.52617 6.47383 8.83333 5.61917 8.83333Z" fill="currentColor"></path><path d="M13.9525 8.83333H10.3808C9.52617 8.83333 8.83333 9.52617 8.83333 10.3808V13.9525C8.83333 14.8072 9.52617 15.5 10.3808 15.5H13.9525C14.8072 15.5 15.5 14.8072 15.5 13.9525V10.3808C15.5 9.52617 14.8072 8.83333 13.9525 8.83333Z" fill="currentColor"></path></svg>
                                                    <span className="sr-only">Toggle grid view</span>
                                                </button>
                                            </div>
                                            <div data-testid="flowbite-tooltip" tabindex="-1" className="absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm transition-opacity duration-300 invisible opacity-0 bg-gray-900 text-white dark:bg-gray-700" className='absolute top-64 left-96' id=":r2:" role="tooltip">
                                                <div className="relative z-20">Toggle grid view</div>
                                                <div className="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700" data-testid="flowbite-tooltip-arrow" className='-bottom-1 left-14' >&nbsp;</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

        </div>

    );
};

export default FlowbiteIcons;