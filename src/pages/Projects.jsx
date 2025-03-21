import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text"><strong>Problem:</strong> {project.problem}</p>
                <p className="card-text"><strong>Impact:</strong> {project.impact}</p>
                {/* Optionally display tech stack */}
                <p className="card-text"><strong>Tech Stack:</strong> {project.tech}</p>
                {/* View Project button can link to something if available */}
                <button className="btn btn-primary" disabled>
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
