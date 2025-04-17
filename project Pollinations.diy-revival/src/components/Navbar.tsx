import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Cpu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold">Pollinations DIY</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/create"
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Create
            </Link>
            <a
              href="https://github.com/pollinations/pollinations.diy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;