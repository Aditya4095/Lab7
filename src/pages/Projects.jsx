import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-4">Technical Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 mb-4" key={project.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{project.tech}</h6>
                
                <div className="project-details mt-3">
                  <h6>Challenge:</h6>
                  <p>{project.problem}</p>
                  
                  <h6>Solution Implemented:</h6>
                  <ul>
                    {project.solution.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  
                  <h6>Impact:</h6>
                  <p className="text-success">{project.impact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}