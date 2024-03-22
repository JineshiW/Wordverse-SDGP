// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require('express'); // Import the express library for building web servers
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config() // Load environment variables from .env file

const app = express(); // Create an express application
const port = process.env.PORT || 3002; 
app.use(express.json()); // Middleware to parse incoming request bodies as JSON

const MODEL_NAME = "gemini-1.0-pro"; // Define the name of the generative model
const API_KEY = process.env.API_KEY; // Load the API key from environment variables

// Function to interact with the generative model and obtain a response based on user input
async function runChat(userInput) { 
  const genAI = new GoogleGenerativeAI(API_KEY); // Create an instance of the GoogleGenerativeAI class
  const model = genAI.getGenerativeModel({ model: MODEL_NAME }); // Get the specific generative model

  // Configuration for generating responses
  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  // Safety settings to block harmful content
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  // Start a chat session with the model using specified settings and user input
  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

   // Send user input to the chat session and await the response
  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

// Serve the index.html file when root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Serve the loader.gif file
app.get('/loader.gif', (req, res) => {
  res.sendFile(__dirname + '/loader.gif');
});

// Handle POST requests to /chat endpoint
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log('incoming /chat req', userInput)
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});