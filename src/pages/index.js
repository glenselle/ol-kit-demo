import React from 'react'
import { Map, Popup, Controls, centerAndZoom } from '@bayer/ol-kit'

import VectorLayer from 'ol/layer/vector'
import VectorSource from 'ol/source/vector'

class App extends React.Component {
  onMapInit = map => {
    const data = new VectorLayer({
      source: new VectorSource({
        features: [/** get some data and have fun with it */]
      })
    })
    // add the data to the map
    map.addLayer(data)

    // quickly take the map
    centerAndZoom(map, {x: 0, y: 0, zoom: 3})
  }

  render () {
    return (
      <Map onMapInit={this.onMapInit}>
        <Popup />
        <Controls />
      </Map>
    )
  }
}

export default App