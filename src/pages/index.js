import React from 'react'

const Index = () => {
  // these checks ensure an SSR build doesn't choke on window references
  if (typeof window !== 'undefined') {
    // this file must exist outside of the /pages dir otherwise Gatsby will
    // compile the file and hit proj4 logic which needs a window defined
    const App = require('./../components/App').default

    return <App />
  } else {
    return null
  }
}

export default Index