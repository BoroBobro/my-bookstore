import React from 'react'

import { Alert } from 'react-bootstrap'

const Welcome = () => (
  <Alert data-testid="welcome-alert" variant="info" className="text-center mt-3">
    <h2>Welcome to My Bookstore</h2>
    <p>Find your next fantasy adventure!</p>
  </Alert>
)

export default Welcome
