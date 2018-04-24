import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Row, Col, message } from 'antd'
import OwnerTable  from '../OwnerTable'
import OwnerGoogleMap from '../OwnerGoogleMap'

import './index.css'

const { Header, Content } = Layout

const GOOGLE_MAP_API_KEY = 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg'

class Owner extends React.Component {
  static propTypes = {
    owners: PropTypes.array,
    ownersLoading: PropTypes.bool,
    ownersError: PropTypes.bool,
    ownersErrorMessage: PropTypes.string,
    getOwners: PropTypes.func,
  }

  componentWillMount () {
    this.props.getOwners()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.ownersError) {
      message.error(nextProps.ownersErrorMessage)
    }
  }

  render () {
    const { owners, ownersLoading } = this.props
    return (
      <Layout className='onwer-page'>
        <Header className='onwer-page__header'>
          <h2 className='page-title'>Owners List Page</h2>
        </Header>
        <Content className='onwer-page__content'>
          <Row>
            <Col md={16}>
              <OwnerTable owners={owners} ownersLoading={ownersLoading} />
            </Col>
            <Col md={8}>
              <OwnerGoogleMap
                owners={owners}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px`, margin: '0 20px' }} />}
                mapElement={<div style={{ height: `100%` }} />} />
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Owner
