import React from 'react'
import { Route } from 'react-router-dom'
import Owner from '../Owner'

const App = () => (
  <div>
    <main>
      <Route exact path='/' component={Owner} />
    </main>
  </div>
)

export default App
