import React, { useState } from "react";
import { Github } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-600 cursor-pointer">
              Names Generator
            </span>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <a
              href="https://github.com/bobbyy16/names-generator-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <Github size={24} />
            </a>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white p-4 shadow-md">
          <a
            href="https://github.com/bobbyy16/names-generator-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-600 hover:text-gray-800 mt-2"
          >
            <Github size={24} />
            <span className="ml-2">GitHub</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
