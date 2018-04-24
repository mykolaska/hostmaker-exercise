import React from 'react'
import { Layout, Row, Col } from 'antd'

import './index.css'

const { Header, Content } = Layout

class Owner extends React.Component {
  render () {
    return (
      <Layout className='onwer-page'>
        <Header className='onwer-page__header'>
          <h2 className='page-title'>Owners List Page</h2>
        </Header>
        <Content className='onwer-page__content'>
          <Row>
            <Col md={16}>
              Table
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
