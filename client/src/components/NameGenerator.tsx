import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, Sparkles } from "lucide-react";

const NameGenerator: React.FC = () => {
  const [description, setDescription] = useState("");
  const [names, setNames] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateNames = async () => {
    if (!description) {
      setError("Please enter a description.");
      return;
    }

    setLoading(true);
    setError(null);
    setNames([]);

    try {
      const response = await axios.post(
        "https://names-generator-ai.onrender.com/api/generateNames",
        { description }
      );

      const generatedNames = response.data.generatedNames;
      setNames(generatedNames);
      localStorage.setItem("generatedNames", JSON.stringify(generatedNames));
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Failed to generate names. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      generateNames();
    }
  };

  useEffect(() => {
    const savedNames = localStorage.getItem("generatedNames");
    if (savedNames) {
      setNames(JSON.parse(savedNames));
    }
  }, []);

  return (
    <div className="w-full max-w-md md:max-w-xl lg:max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-purple-700">
          Name Generator
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center mb-6">
          Enter a description of your brand, business, or social media handle to
          generate creative name suggestions.
        </p>

        <div className="space-y-4 w-full">
          <textarea
            className="w-full p-3 text-sm md:text-base border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-purple-500 focus:border-transparent 
            transition duration-200 ease-in-out resize-none"
            placeholder="Describe your brand or business..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={4}
          />

          <button
            className="w-full bg-purple-600 text-white py-3 rounded-lg 
            hover:bg-purple-700 transition duration-300 ease-in-out 
            flex items-center justify-center space-x-2 
            text-sm md:text-base"
            onClick={generateNames}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="mr-2" size={20} />
                <span>Generate Names</span>
              </>
            )}
          </button>

          {error && (
            <p className="text-red-500 text-center text-sm md:text-base font-medium mt-4">
              {error}
            </p>
          )}

          {names.length > 0 && (
            <div className="mt-6 bg-gray-50 p-4 md:p-6 rounded-lg shadow-inner">
              <h2 className="text-lg md:text-xl font-bold mb-4 text-purple-600">
                Generated Names:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {names.map((name, index) => (
                  <div
                    key={index}
                    className="text-sm md:text-base font-medium text-gray-700 
                    bg-purple-100 p-2 md:p-3 rounded-md 
                    hover:bg-purple-200 transition-all duration-300 
                    text-center"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameGenerator;
