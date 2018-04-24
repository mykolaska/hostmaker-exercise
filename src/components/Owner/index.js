import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Row, Col, message } from 'antd'
import OwnerTable  from '../OwnerTable'

import './index.css'

const { Header, Content } = Layout

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
              Map
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Owner
