import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { operations } from '../../modules'
import Owner  from '../../components/Owner'

const mapDispatchToProps = (dispatch) => bindActionCreators(operations, dispatch)

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Owner)
