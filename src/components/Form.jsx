import React from 'react';

const Form = () => {
    return (
        <div className='h-full w-[80vw] mx-auto mt-10'>
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
                    <span className='block'>Email</span>
                    <input type='email' placeholder='you@gmail.com' className='mt-1 border border-slate-300 block w-full px-3 py-2 bg-white rounded-md text-sm placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        ' />
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
        </div>
    );
};

export default Form;