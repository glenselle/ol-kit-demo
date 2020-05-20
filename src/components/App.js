import React from 'react'
import {
  Map,
  LayerPanel,
  Controls,
  Popup,
  BasemapContainer,
  LayerStyler,
  LayerPanelPage,
  LayerPanelContent
} from '@bayer/ol-kit'
import BorderStyleIcon from '@material-ui/icons/BorderStyle';

import "./app.css"

class App extends React.Component {
  render () {
    return (
      <Map fullScreen>
        <Popup />
        <LayerPanel>
          <LayerPanelPage tabIcon={<BorderStyleIcon />}>
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