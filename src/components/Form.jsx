import React from 'react';

const Form = () => {
    return (
        <div className='h-full w-[80vw] mx-auto mt-10'>
            <h1 className='text-center text-4xl text-slate-700 mb-7'>Register</h1>
            <form className='flex flex-col gap-5'>
                <label className='block text-md font-medium text-slate-500'>
                    <span className='block'>Username</span>
                    <input type='text' value='tbone' disabled className='mt-1 border border-slate-300 block w-full px-3 py-2 bg-white rounded-md text-sm placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        ' />
                </label>
                <label className='block text-md font-medium text-slate-500'>
                    <span className="block after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
                    <input type='email' placeholder='you@gmail.com' className='mt-1 border border-slate-300 block w-full px-3 py-2 bg-white rounded-md text-sm placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        peer
                        ' />
                        <p className='mt-2 hidden peer-invalid:block text-sm text-pink-500'>Please provide a valid email address</p>
                </label>
                <label className='block text-md font-medium text-slate-500'>
                    <span className='block'>Password</span>
                    <input type='password' placeholder='password' className='mt-1 border border-slate-300 block w-full px-3 py-2 bg-white rounded-md text-sm placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        ' />
                </label>
            </form>

            <div className='mt-20'>

            </div>


            {/* <blockquote className='text-2xl font-semibold italic text-center text-slate-900'>
                When you look 
                <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block'>
                    <span className='relative text-white'> annoyed </span>
                </span>
                all the time, people think that you're busy.
            </blockquote> */}

            <blockquote className='text-2xl font-semibold italic text-center text-slate-900'>
                When you look 
                <span className='relative'>
                    <span className='block absolute bg-pink-500 -inset-1 -skew-y-3' aria-hidden="true"></span>
                    <span className='relative text-white'>annoyed</span>
                </span>
                all the time, people think you're busy.
            </blockquote>



        </div>
    );
};

export default Form;