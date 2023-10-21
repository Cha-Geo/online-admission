"use client"
import React, { useState } from 'react';

const Collapse = () => {
  const [openCollapse1, setOpenCollapse1] = useState(false);
  const [openCollapse2, setOpenCollapse2] = useState(false);

  const toggleCollapse1 = () => {
    setOpenCollapse1(!openCollapse1);
    setOpenCollapse2(false);
  };

  const toggleCollapse2 = () => {
    setOpenCollapse2(!openCollapse2);
    setOpenCollapse1(false);
  };

  const toggleBothCollapses = () => {
    setOpenCollapse1(!openCollapse1);
    setOpenCollapse2(!openCollapse2);
  };

  return (
    <div>
      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={toggleCollapse1}
          aria-expanded={openCollapse1}
          aria-controls="multiCollapse1"
        >
          Toggle first element
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={toggleCollapse2}
          aria-expanded={openCollapse2}
          aria-controls="multiCollapse2"
        >
          Toggle second element
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={toggleBothCollapses}
          aria-expanded={openCollapse1 || openCollapse2}
          aria-controls="multiCollapse1 multiCollapse2"
        >
          Toggle both elements
        </button>
      </div>
      <div className="flex">
        <div
          className={`${
            openCollapse1 ? 'block' : 'hidden'
          } transition-all duration-500`}
          id="multiCollapse1"
        >
          <div className="bg-gray-100 text-gray-900 p-4">
            Some placeholder content for the first collapse component of this
            multi-collapse example. This panel is hidden by default but revealed
            when the user activates the relevant trigger.
          </div>
        </div>
        <div
          className={`${
            openCollapse2 ? 'block' : 'hidden'
          } transition-all duration-500`}
          id="multiCollapse2"
        >
          <div className="bg-gray-100 text-gray-900 p-4">
            Some placeholder content for the second collapse component of this
            multi-collapse example. This panel is hidden by default but revealed
            when the user activates the relevant trigger.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
