import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import OnwerMapMarker from '../OwnerMapMarker'

class OwnerGoogleMap extends React.Component {
  static propTypes = {
    owners: PropTypes.array,
  }

  renderMarkers = () => {
    const { owners } = this.props
    return owners.map((owner, index) => {
      return (
        <OnwerMapMarker key={index} owner={owner} />
      )
    })
  }

  render () {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 51.5073835, lng: -0.1277801 }}
      >
        {this.renderMarkers()}
      </GoogleMap>
    )
  }
}

export default compose(
  withScriptjs,
  withGoogleMap,
)(OwnerGoogleMap);
