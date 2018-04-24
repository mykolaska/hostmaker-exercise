import React from 'react'
import PropTypes from 'prop-types'
import { Marker, InfoWindow } from 'react-google-maps'
import { forEach } from 'lodash'

import './index.css'

const RESULT_OK = 'OK'
const RESULT_ZERO = 'ZERO_RESULTS'

const addressFields = ['line1', 'line2', 'line3', 'line4', 'city', 'postCode', 'country']

class OwnerMapMarker extends React.Component {
  static propTypes = {
    owner: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      location: null,
      isLoaded: false,
      isError: false,
      errorMessage: null,
      isOpenInfoWindow: false,
    };
  }

  componentDidMount() {
    const { owner } = this.props
    if (owner && owner.address) {
      fetch(`http://maps.google.com/maps/api/geocode/json?address=${this.getAddressString(owner.address)}`)
        .then(res => res.json())
        .then(
          (result) => {
            if (result.status === RESULT_OK) {
              const geometry = result.results[0].geometry
              this.setState({
                location: geometry.location,
                isLoaded: true,
                isError: false,
              });
            } else if (result.status === RESULT_ZERO) {
              this.setState({
                isLoaded: true,
                isError: true,
                errorMessage: 'No result',
              });
            } else {
              this.setState({
                isLoaded: true,
                isError: true,
                errorMessage: result.error_message,
              });
            }
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              isError: true,
              errorMessage: error.message,
            });
          }
        )
    }
  }

  getAddressString = (address) => {
    let addresses = []
    forEach(addressFields, (key) => {
      if (address[key]) {
        addresses.push(address[key])
      }
    })
    return addresses.join(' ')
  }

  onToggleOpen = () => {
    this.setState({
      isOpenInfoWindow: !this.state.isOpenInfoWindow
    })
  }

  renderAddressItem = (record) => {
    const { address } = record
    let addresses = []
    forEach(addressFields, (key) => {
      if (address[key]) {
        addresses.push((
          <p key={key} style={{marginBottom: 0}}>{address[key]}</p>
        ))
      }
    })
    return addresses
  }

  render () {
    const { owner } = this.props
    return (
      <div>
        {(this.state.isLoaded && !this.state.isError && this.state.location) &&
        <Marker position={this.state.location} onClick={this.onToggleOpen} >
          {this.state.isOpenInfoWindow &&
          <InfoWindow onCloseClick={this.onToggleOpen}>
            <div>
              <div className='info-item'>
                <div className='info-item__title'>Onwer Name: </div>
                <div className='info-item__value'>{owner.owner}</div>
              </div>
              <div className='info-item'>
                <div className='info-item__title'>Address: </div>
                <div className='info-item__value'>
                  {this.renderAddressItem(owner)}
                </div>
              </div>
              <div className='info-item'>
                <div className='info-item__title'>IncomeGenerated: </div>
                <div className='info-item__value'>{owner.incomeGenerated}£</div>
              </div>
            </div>
          </InfoWindow>}
        </Marker>
        }
      </div>
    )
  }
}

export default OwnerMapMarker
