import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { operations } from '../../modules'
import Owner  from '../../components/Owner'

const mapDispatchToProps = (dispatch) => bindActionCreators(operations, dispatch)

const mapStateToProps = (state) => ({
  owners: state.owners ? state.owners.data : [],
  ownersLoading: state.owners ? state.owners.isLoading : false,
  ownersError: state.owners ? state.owners.error : false,
  ownersErrorMessage: state.owners ? state.owners.errorMessage : null,
})

export default connect(mapStateToProps, mapDispatchToProps)(Owner)
