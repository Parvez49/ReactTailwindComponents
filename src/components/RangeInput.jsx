import React, { useState } from 'react';

const RangeInput = () => {

    const [iconSize, setIconSize] = useState(0)

    const handleIconSize = (e)=>{
        setIconSize(e.target.value/100)
    }
    return (
        <div className="min-w-[260px] max-w-7xl mx-auto  mb-3 lg:mb-0">
            <div className="w-full flex justify-between items-center">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300 text-sm font-medium !text-gray-600 dark:!text-gray-400" data-testid="flowbite-label" for="icon-size">Icon size</label>
                <span className="text-sm font-medium !text-gray-600 dark:!text-gray-400">{iconSize}px</span>
            </div>
            <div data-testid="flowbite-range-slider" className="flex">
                <div className="relative w-full">
                    <input 
                        type="range" 
                        className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 h-1" 
                        id="icon-size" 
                        min="0" 
                        max="100" 
                        value={iconSize*100} 
                        onChange={handleIconSize}
                        style={{
                            '--tw-range-thumb-color':'rgb(55,55,55)',
                            '--tw-range-thumb-hover-color':'rgb(37,99,237)',
                        }}
                        />
                </div>
            </div>
        </div>
    );
};

export default RangeInput;