import React, { useState } from "react";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen bg-gray-100">
      <button
        onClick={toggleDrawer}
        className="p-4 text-white bg-blue-600 hover:bg-blue-700"
      >
        Menu
      </button>

      {/* Dark overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleDrawer}
          className="p-4 text-white bg-red-600 hover:bg-red-700"
        >
          Close
        </button>
        <div className="p-4">
          <h2 className="text-xl font-bold">Drawer Content</h2>
          <p>Here is some content inside the drawer.</p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
