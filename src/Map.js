import React from 'react'
import { Map as olKitMap, Popup, Controls, centerAndZoom } from '@bayer/ol-kit'

import VectorLayer from 'ol/layer/vector'
import VectorSource from 'ol/source/vector'

class Map extends React.Component {
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
      <olKitMap onMapInit={this.onMapInit}>
        <Popup />
        <Controls />
      </olKitMap>
    )
  }
}

export default Map