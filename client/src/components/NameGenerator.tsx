import React, { useState } from "react";
import axios from "axios";

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
    setError(null); // Reset error state

    try {
      const response = await axios.post(
        "https://names-generator-ai.onrender.com/api/generateNames",
        {
          description,
        }
      );
      setNames(response.data.names);
    } catch (err) {
      setError("Failed to generate names. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Name Generator</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        onClick={generateNames}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Names"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {names.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Generated Names:</h2>
          <ul className="list-disc ml-5 mt-2">
            {names.map((name, index) => (
              <li key={index} className="text-lg">
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
