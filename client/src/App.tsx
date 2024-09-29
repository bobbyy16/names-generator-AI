import React from "react";
import NameGenerator from "./components/NameGenerator"; // Adjust the path as necessary

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
      <NameGenerator />
    </div>
  );
};

export default App;
