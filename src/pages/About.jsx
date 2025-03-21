import React, { useState } from 'react';
import { skillsData } from './../api/skillsData';
import { useApi } from './../hooks/useApi';

export default function About() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? skill.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(skillsData.map(skill => skill.category))];

  const showSkills = searchTerm || selectedCategory;

  // Inline styles
  const styles = {
    skillsSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      padding: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    skillsCategory: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    skillsCategoryHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    },
    badgeContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center', // Use camelCase for CSS properties with hyphens
      gap: '12px',
      marginTop: '15px',
    },
    badge: {
      padding: '10px 16px',
      fontSize: '13px',
      fontWeight: '600',
      borderRadius: '24px',
      whiteSpace: 'nowrap',
      transition: 'transform 0.2s ease, background-color 0.2s ease',
      cursor: 'pointer',
    },
    badgeHover: {
      transform: 'scale(1.1)',
    },
    cloudTech: {
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '13px',
      textAlign: 'center',
      padding: '8px 14px',
      borderRadius: '10px',
      display: 'inline-block',
      lineHeight: '1.3',
      margin: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    language: { backgroundColor: '#28a745', color: 'white' },
    database: { backgroundColor: '#17a2b8', color: 'white' },
    devTools: { backgroundColor: '#ffc107', color: 'black' },
    devTech: { backgroundColor: '#6c757d', color: 'white' },
    skillsCategoryH5: {
      marginBottom: '15px',
      fontSize: '18px',
      fontWeight: '600',
      color: '#2c3e50',
    },
    skillsCategoryP: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '10px',
    },
    cloudTechContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center', // Use camelCase for CSS properties with hyphens
      gap: '10px',
      marginTop: '10px',
    },
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-5">About Me</h1>
      <div className="row">
        {/* Education Section */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Education</h2>
              <p className="fs-5">
                <strong>Bachelor of Computer Science</strong><br />
                Dalhousie University | Halifax, Nova Scotia<br />
                Sep. 2021 – April 2025
              </p>

              <h3 className="mt-4">Career Goals</h3>
              <ul className="list-unstyled">
                <li>✅ Pursuing AWS Certified Solutions Architect & DevOps Engineer certifications</li>
                <li>✅ Developing expertise in cloud-native solutions and DevSecOps practices</li>
                <li>✅ Creating secure, scalable infrastructure solutions for enterprise applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Professional Experience</h2>
              
              <div className="experience-item mb-4">
                <h5>Cyber Security Analyst (Co-op)</h5>
                <p className="text-muted">Irving Oil Limited | Sep. 2024 – Dec. 2024</p>
                <ul>
                  <li>🔒 Secured 54 servers by removing 375 inactive accounts</li>
                  <li>🔍 Conducted security audits and incident response analysis</li>
                </ul>
              </div>

              <div className="experience-item mb-4">
                <h5>Technology Risk Analyst (Co-op)</h5>
                <p className="text-muted">Irving Oil Limited | Jan. 2024 – August 2024</p>
                <ul>
                  <li>📊 Led 50+ client workshops using NIST/ISO frameworks, reducing project risks by 25%</li>
                  <li>📈 Developed PowerBI dashboards for real-time risk monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div style={styles.skillsSection}>
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Technical Expertise</h2>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control mb-3"
              />
              <div className="d-flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                    className={`btn btn-sm ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            {showSkills && (
              <div className="row">
                {filteredSkills.map(skill => (
                  <div key={skill.id} className="col-md-4 mb-3">
                    <div style={styles.badgeContainer}>
                      <span
                        style={{
                          ...styles.badge,
                          ...(skill.category === 'Languages'
                            ? styles.language
                            : skill.category === 'Databases'
                            ? styles.database
                            : skill.category === 'Developer Technologies'
                            ? styles.devTech
                            : styles.devTools),
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}