import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="text-gray-600 text-sm md:text-base text-center">
            © {new Date().getFullYear()} Names Generator AI. All rights
            reserved.
          </div>
          <div className="hidden md:block text-gray-600">|</div>
          <div className="text-gray-600 text-sm md:text-base text-center">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/bobbyy16"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abhishek
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
