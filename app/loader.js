"use client"
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
