import React from 'react'

class App extends React.Component {
  render () {
    // these checks ensure an SSR build doesn't choke on window references
    console.log('typeof window', typeof window !== 'undefined')
    if (typeof window !== 'undefined') {
      const Map = require('../Map')

      return <Map />
    } else {
      return null
    }
  }
}

export default App