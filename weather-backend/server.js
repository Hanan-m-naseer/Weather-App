const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Log every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/api/getWeather', async (req, res) => {
  const { city } = req.body;

  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  // Improved prompt to reduce code fences
  const prompt = `
You are a weather data provider. Respond ONLY with pure JSON—no markdown, no code fences, no extra text.
Return this format:

{
  "current": {
    "city": "The user's requested city",
    "temperature": number,
    "condition": "Sunny|Cloudy|Rain|Thunderstorm|Snow|Foggy|Windy",
    "humidity": number,
    "windSpeed": number
  },
  "forecast": [
    {"day":"Monday","temperature":number,"condition":"..."},
    {"day":"Tuesday","temperature":number,"condition":"..."},
    {"day":"Wednesday","temperature":number,"condition":"..."},
    {"day":"Thursday","temperature":number,"condition":"..."},
    {"day":"Friday","temperature":number,"condition":"..."}
  ]
}

For the city: ${city}. If city not found, return {"error":"City not found"}.
Temperature in Celsius, wind speed in km/h.
`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    console.log('Sending prompt:', prompt);

    const geminiResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const geminiData = await geminiResponse.json();
    console.log('Gemini raw response:', JSON.stringify(geminiData, null, 2));

    let text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return res.status(500).json({ error: `No text returned. Gemini raw response: ${JSON.stringify(geminiData)}` });
    }

    text = text.trim();

    // Remove code fences if present
    if (text.startsWith('```')) {
      text = text.replace(/^```[\w]*\s*\n/, '');
      text = text.replace(/\n```$/, '');
    }

    console.log('Cleaned Gemini text:', text);

    const parsed = JSON.parse(text);
    if (parsed.error) {
      return res.status(404).json({ error: parsed.error });
    }

    res.json(parsed);

  } catch (error) {
    console.error('Error calling Gemini:', error);
    res.status(500).json({ error: 'Failed to fetch weather data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
