# Name Generator AI

A React TypeScript application that generates unique and creative names based on user-provided descriptions using the Hugging Face API.

## Features

- User-friendly interface to input a description.
- Generates up to 5 unique names based on the description.
- Styled with Tailwind CSS for a responsive and modern look.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **API**: Hugging Face Inference API (using the distilgpt2 model)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/names-generator-AI.git
   ```

2. Navigate to the project directory:

```
cd names-generator-AI
```

3. Install dependencies:

```
npm install
```

4. Set up environment variables: Create a .env file in the server/src directory and add your Hugging Face API key:

```
HUGGING_FACE_API_KEY=your_api_key_here
```

5. Start the backend server:

```
cd server/src
node server.ts
```

6. Start the client:

```
cd ../client
npm run dev
```

## Usage

- Open your browser and navigate to `http://localhost:8080`.
- Enter a description in the input field.
- Click the "Generate Names" button to receive a list of unique names.

## Important Note

The model used in this application is the **distilgpt2** from Hugging Face. While it can generate creative and unique names, please be aware that it may not always provide highly accurate or contextually appropriate results. It is advisable to review the generated names before use.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or suggestions.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements

- React
- TypeScript
- Tailwind CSS
- Hugging Face

### Instructions to Customize

- Replace `your-username` in the GitHub clone command with your actual GitHub username.
- Update any specific instructions related to your project setup as necessary.
- You can also add additional sections if needed, such as FAQs, troubleshooting, or a roadmap for future features.

Let me know if you need any adjustments or additional sections!
