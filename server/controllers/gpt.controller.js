const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateNames(req, res) {
  const description = req.body.description;
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Generate 12 unique and creative names for a social media handle or shop based on this ${description}.
    Provide only the names, separated by newlines, without any additional text or numbering.`;

  try {
    const result = await model.generateContent(prompt);
    const text = await result.response.text(); // Make sure to await here for proper handling
    console.log(text);

    const generatedNames = text
      .split("\n")
      .map((name) => name.trim()) // Trim whitespace
      .filter((name) => name.length > 0); // Remove any empty lines

    // Check if all names are single-word
    const invalidName = generatedNames.find(
      (name) => name.split(" ").length > 1
    );

    if (invalidName) {
      throw new Error(
        `Invalid name found: "${invalidName}". All names must be single-word.`
      );
    }

    if (generatedNames.length !== 12) {
      throw new Error(
        "The AI did not generate exactly 12 valid names. Please try again."
      );
    }

    console.log(generatedNames);

    res.status(200).json({ generatedNames });
  } catch (error) {
    console.error("Error generating names:", error.message);
    res
      .status(500)
      .json({
        error:
          error.message || "Failed to generate valid names. Please try again.",
      });
  }
}

module.exports = { generateNames };
