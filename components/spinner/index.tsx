'use client'
import React from 'react'

const Spinner: React.FC = ({
}) => {
  return (
    <div className='flex justify-center mt-[20%]' style={{ minHeight: 'calc(100vh - 625px)' }}>
      <div className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
