import React from 'react'
import {
  Map,
  LayerPanel,
  Controls,
  Popup,
  BasemapContainer,
  LayerStyler,
  LayerPanelPage,
  LayerPanelContent,
  VectorLayer,
  centerAndZoom
} from '@bayer/ol-kit'
import ColorizeIcon from '@material-ui/icons/Colorize'
import olSourceVector from 'ol/source/vector'
import olFeature from 'ol/feature'
import olGeomPoint from 'ol/geom/point'
import olProj from 'ol/proj'

import "./app.css"

class App extends React.Component {
  onMapInit = (map) => {
    var layer = new VectorLayer({
      title: 'Diltz\' House',
      source: new olSourceVector({
        features: [new olFeature({ ['x marks the spot']: ['the lake house'], geometry: new olGeomPoint(olProj.fromLonLat([-89.940598,38.923107])) })]
      })
    })

    map.addLayer(layer)

    centerAndZoom(map, { x: -89.941642, y: 38.922929, zoom: 17.20 })
  }

  render () {
    return (
      <Map onMapInit={this.onMapInit} fullScreen>
        <Popup />
        <LayerPanel>
          <LayerPanelPage tabIcon={<ColorizeIcon />}>
            <LayerPanelContent style={{ padding: '0px' }}>
              <LayerStyler />
            </LayerPanelContent>
          </LayerPanelPage>
        </LayerPanel>
        <Controls variation={'dark'} />
        <BasemapContainer />
      </Map>
    )
  }
}

export default App