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
import PaletteIcon from '@material-ui/icons/Palette'
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
        features: [new olFeature({
          feature_type: ['the lake house'],
          title: 'the lake house',
          geometry: new olGeomPoint(olProj.fromLonLat([-89.940598,38.923107])) })]
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
          <LayerPanelPage tabIcon={<PaletteIcon />}>
            <LayerPanelContent style={{ padding: '0px', fontFamily: 'Roboto, Arial, sans-serif' }}>
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