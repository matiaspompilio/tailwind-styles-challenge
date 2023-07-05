import React from 'react';
import Logo from '@assets/logo.svg';

const Header = () => (
  <nav>
    <div className="flex p-6 justify-between">
      <img className="h-8 w-auto" src={Logo} />
      <div className="sm:ml-6">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-large">
            Features
          </a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-large">
            Team
          </a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-large">
            Sign In
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
