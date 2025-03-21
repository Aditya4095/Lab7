import React from 'react'
export default function Footer() {
    return (
      <footer className="bg-dark text-white mt-5 p-4">
        <div className="container text-center">
          <div className="mb-3">
            <a href="mailto:ad963939@dal.ca" className="text-white me-3">
              <i className="bi bi-envelope"></i> Email
            </a>
            <a href="https://www.linkedin.com/in/adityaverdhan-singh/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <span className="text-white-50">| 902-989-4095</span>
          </div>
          <p className="mb-0">&copy; 2025 Adityaverdhan Singh Chauhan. All rights reserved.</p>
        </div>
      </footer>
    )
  }