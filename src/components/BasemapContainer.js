import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BasemapSliderContainer } from './styled'
import { BasemapOpenStreetMap, BasemapBlankWhite, BasemapStamenTerrain, BasemapStamenTonerDark, BasemapStamenTonerLite } from '@bayer/ol-kit'

const LAYER_TYPE_ID = '_ol_kit_basemap'

class BasemapContainer extends Component {
  constructor (props) {
    super(props)

    this.BASEMAP_OPTIONS = [
      <BasemapOpenStreetMap key='openStreetMap' layerTypeID={LAYER_TYPE_ID} map={props.map} />,
      <BasemapStamenTerrain key='stamenTerrain' layerTypeID={LAYER_TYPE_ID} map={props.map} />,
      <BasemapStamenTonerDark key='stamenTonerDark' layerTypeID={LAYER_TYPE_ID} map={props.map} />,
      <BasemapStamenTonerLite key='stamenTonerLite' layerTypeID={LAYER_TYPE_ID} map={props.map} />,
      <BasemapBlankWhite key='blankWhite' layerTypeID={LAYER_TYPE_ID} map={props.map} />
    ]

    this.state = {
      showBasemaps: false,
      basemapOptions: this.BASEMAP_OPTIONS
    }
  }

  componentDidMount () {
    this.props.map.on('click', () => this.setState({ showBasemaps: false }))
  }

  onBasemapChanged = (layer) => {
    const newBasemap = this.state.basemapOptions.find(basemap => basemap.key === layer.get('_ol_kit_basemap'))
    const newIndexOfBasemap = this.state.basemapOptions.indexOf(newBasemap)
    const selectedBasemap = this.state.basemapOptions.splice(newIndexOfBasemap, 1)

    this.setState({ showBasemaps: false, basemapOptions: [...selectedBasemap, ...this.state.basemapOptions] })
  }

  render () {
    const { showBasemaps, basemapOptions } = this.state

    return basemapOptions.map((basemap, i) => {
      const zIndex = basemapOptions.length - i

      if (showBasemaps) {
        return (
          <BasemapSliderContainer zIndex={zIndex} left={0} bottom={14 + (i * 90)} key={i}>
            {React.cloneElement(basemap, { onBasemapChanged: (layer) => this.onBasemapChanged(layer) })}
          </BasemapSliderContainer>
        )
      } else {
        return (
          <BasemapSliderContainer zIndex={zIndex} onClick={() => this.setState({ showBasemaps: true })} key={i}>
            {basemap}
          </BasemapSliderContainer>
        )
      }
    })
  }
}

BasemapContainer.propTypes = {
  map: PropTypes.object
}

export default BasemapContainer
