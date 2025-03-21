// import { NavLink } from 'react-router-dom'
// import React from 'react'

// export default function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <NavLink className="navbar-brand" to="/">Aditya Chauhan</NavLink>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/projects">Projects</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Header({ toggleTheme, theme }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${theme === 'dark' ? 'bg-dark' : 'bg-primary'}`}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">Aditya Chauhan</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-light" onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}