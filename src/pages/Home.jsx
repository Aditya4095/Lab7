import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/weather');  // ✅ Updated to relative path
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="text-center py-5">
      <div className="hero-section bg-light py-5 mb-5">
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead">Software Engineer | Cyber Security Analyst | AI Enthusiast</p>
        <div className="mt-4">
          <Link to="/projects" className="btn btn-primary btn-lg me-3">View Projects</Link>
          <Link to="/about" className="btn btn-outline-primary btn-lg">About Me</Link>
        </div>
      </div>

      {weather && (
        <div className="card shadow mb-5">
          <div className="card-body">
            <h2 className="card-title">Weather in {weather.city}</h2>
            <p className="card-text"><strong>Temperature:</strong> {weather.temperature}°C</p>
            <p className="card-text"><strong>Humidity:</strong> {weather.humidity}%</p>
          </div>
        </div>
      )}

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Recent Work</h2>
              <p className="card-text">Check out my latest projects and see what I've been working on!</p>
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h2 className="card-title">About Me</h2>
              <p className="card-text">Learn more about my skills, experience, and career journey.</p>
              <Link to="/about" className="btn btn-primary">About Me</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
