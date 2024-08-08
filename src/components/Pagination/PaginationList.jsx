import React, { useState } from 'react';

const PaginationList = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate total pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Get current items based on the current page
    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <ul>
                {currentItems.map((item, index) => (
                <li key={index} className="p-2 border-b">
                    {item}
                </li>
                ))}
            </ul>

            {/* Pagination Controls */}
            <div className='flex justify-center mt-4'>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={`px-3 py-1 mx-1 border ${
                            index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                        }`}
                        onClick={() => handleClick(index + 1)}
                        >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default PaginationList;