const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const gptRoutes = require("./routes/gpt.routes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", gptRoutes);

app.use("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App is listening at PORT - http://localhost:${PORT}`);
});
