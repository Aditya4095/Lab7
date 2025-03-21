const express = require('express');
const cors = require('cors');
const axios = require('axios');
const projects = require('./../projects.json');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to fetch all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Route to fetch weather data
app.get('/api/weather', async (req, res) => {
  const city = req.query.city || 'Halifax'; // Default city is Halifax
  const apiKey = '870c16220336405995afc1fb03c51d8f'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const { name: city, main: { temp: temperature, humidity } } = response.data;
    res.json({ city, temperature, humidity });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});