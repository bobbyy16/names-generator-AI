import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="text-gray-600 text-lg text-center">
          © {new Date().getFullYear()} Names Generator AI. All rights reserved.
        </div>
        <div className="text-gray-600 text-lg text-center mt-2">
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
    </footer>
  );
};

export default Footer;
