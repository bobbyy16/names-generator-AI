import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, Sparkles } from "lucide-react";

const NameGenerator: React.FC = () => {
  const [description, setDescription] = useState("");
  const [names, setNames] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // const clearData = "";

  const generateNames = async () => {
    if (!description) {
      setError("Please enter a description.");
      return;
    }

    setLoading(true);
    setError(null);

    // Clear previous names before generating new ones
    setNames([]);

    try {
      const response = await axios.post(
        "https://names-generator-ai.onrender.com/api/generateNames",
        { description }
      );

      const generatedNames = response.data.generatedNames;

      // Check if any of the generated names have more than one word
      // const invalidNames = generatedNames.filter(
      //   (name: string) => name.split(" ").length > 1
      // );

      // if (invalidNames.length > 0) {
      //   setError("One or more generated names have more than one word.");
      //   return;
      // }

      setNames(generatedNames);
      localStorage.setItem("generatedNames", JSON.stringify(generatedNames));
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to generate names. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLocalStorage = () => {
    const savedNames = localStorage.getItem("generatedNames");
    if (savedNames) {
      setNames(JSON.parse(savedNames));
    }
  };

  useEffect(() => {
    handleLocalStorage();
  }, []);

  return (
    <div className="w-100 mt-8 max-w-4xl lg:pl-56 lg:pr-56 mx-auto sm:p-6 sm:pl-24 sm:pr-24 lg:p-8 bg-white shadow-md rounded-xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-purple-700">
        Name Generator
      </h1>

      <h2 className="text-lg text-gray-600 text-center mb-4">
        Enter a description of your brand, business, or social media handle to
        generate creative name suggestions. Keep it brief and descriptive.
      </h2>

      <div className="space-y-4 max-w-lg mx-auto">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out resize-none"
          placeholder="Enter a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
        <button
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out flex items-center justify-center space-x-2"
          onClick={generateNames}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Sparkles size={20} />
              <span>Generate Names</span>
            </>
          )}
        </button>
      </div>

      {error && (
        <p className="text-red-500 mt-4 text-center font-medium">{error}</p>
      )}

      {names.length > 0 && (
        <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-inner max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4 text-purple-600">
            Generated Names:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {names.map((name, index) => (
              <li
                key={index}
                className="text-md font-medium text-gray-700 bg-purple-100 p-3 rounded-md hover:bg-purple-200 transition-all duration-300 ease-in-out flex items-center justify-center"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NameGenerator;
