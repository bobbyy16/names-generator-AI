const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateNames(req, res) {
  const description = req.body.description;
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Generate 12 unique and creative names for a social media handle or shop based on this ${description}.
    Provide only the names, separated by newlines, without any additional text or numbering`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const generatedNames = text.split("\n");

    // Check if any generated name contains more than one word
    const invalidName = generatedNames.find(
      (name) => name.split(" ").length > 1
    );
    if (invalidName) {
      return res.status(400).json({
        message:
          "Invalid response from AI. Try giving more descriptive description or your description might contain some offensive words, try with different description.",
        response: text,
      });
    }

    res.status(200).json({ generatedNames });
  } catch (error) {
    console.error("Error generating names:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = { generateNames };
