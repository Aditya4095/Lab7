import { Link } from 'react-router-dom'
import React from 'react'

export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="lead">Page Not Found</p>
      <Link to="/" className="btn btn-primary mt-3">
        Return to Home
      </Link>
    </div>
  )
}