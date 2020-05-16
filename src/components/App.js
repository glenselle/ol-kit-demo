import React from 'react'
import { Map, LayerPanel, Controls, centerAndZoom, Popup } from '@bayer/ol-kit'
import BasemapContainer from './BasemapContainer'

import "./app.css"

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      map: {}
    }
  }

  onMapInit = map => {
    this.setState({ map })
    // quickly take the map
    centerAndZoom(map, {x: 0, y: 0, zoom: 3})
  }

  render () {
    if (this.state.map) {
      return (
        <Map onMapInit={this.onMapInit} fullScreen>
          <Popup />
          <LayerPanel />
          <Controls variation={'dark'} />
          <BasemapContainer map={this.state.map} />
        </Map>
      )
    } else {
      return null
    }
    
  }
}

export default App