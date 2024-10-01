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
    console.log(text);

    const generatedNames = text.split("\n");

    console.log(generatedNames);

    res.status(200).json({ generatedNames });
  } catch (error) {
    console.error("Error generating names:", error);
    throw error;
  }
}

module.exports = { generateNames };
