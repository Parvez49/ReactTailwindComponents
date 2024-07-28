import React from 'react';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaGoogle } from "react-icons/fa";


const Button = () => {
    return (
        // <button className='bg-violet-500 hover:bg-violet-600 active:bg-slate-500 focus:outline-none focus:ring focus:ring-violet-300'> Save Changes </button>

        <div className='mt-10 w-[80vw] mx-auto'>
            <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Save Changes
            </button>

            Lets go for a <FaBeer color='' />?
            <FaGoogle className='w-10 h-10 text-blue-600'/>

        </div>
        
    );
};

export default Button;