import React from 'react'
import PropTypes from 'prop-types'
import { forEach } from 'lodash'

const addressFields = ['line1', 'line2', 'line3', 'line4', 'city', 'postCode', 'country']

class AddressCell extends React.Component {
  static propTypes = {
    record: PropTypes.object,
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
    const { record } = this.props
    return (
      <div>
        {this.renderAddressItem(record)}
      </div>
    )
  }
}

export default AddressCell
