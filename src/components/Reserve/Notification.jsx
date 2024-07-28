import React from 'react';

const Notification = () => {
    return (
        <div className='notification-container m-12'>
            <button className='button relative flex items-center justify-center h-12 w-12 text-white bg-[#dddddd] border-none outline-none rounded-full'>
                <svg className='icon' fill='blue' fillOpacity='0.75' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                <span className='badge absolute -top-3 -right-3 bg-blue-600 rounded-full p-1 flex items-center justify-center w-8 h-8 transition-transform transition-colors hover:border hover:border-red-500 animate-pulse'>99+</span>
            </button>
        </div>
    );
};

export default Notification;