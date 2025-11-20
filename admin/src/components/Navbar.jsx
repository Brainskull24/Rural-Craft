import React from 'react';

const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%]'>
      <div className="text-2xl font-bold text-amber-900">
        🏺 <span className="text-amber-700">Rural</span>Crafts Admin
      </div>
      <button onClick={()=>setToken("")} className='bg-amber-800 hover:bg-amber-900 text-white py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm transition-colors'>Logout</button>
    </div>
  );
};

export default Navbar;