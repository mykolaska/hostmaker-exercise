import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import AddressCell  from '../AddressCell'

const columns = [
  {
    title: 'Index',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: 'Address',
    key: 'airbnbId',
    render: (text, record) => {
      return (
        <AddressCell record={record} />
      )
    }
  },
  {
    title: 'IncomeGenerated',
    dataIndex: 'incomeGenerated',
    key: 'incomeGenerated',
    render: val => `${val}£`,
  }
]

class OwnerTable extends React.Component {
  static propTypes = {
    ownersLoading: PropTypes.bool,
    owners: PropTypes.array,
  }

  render () {
    const { ownersLoading, owners } = this.props
    return (
      <Table
        rowKey={record => record.owner}
        dataSource={owners}
        columns={columns}
        loading={ownersLoading}
      />
    )
  }
}

export default OwnerTable
