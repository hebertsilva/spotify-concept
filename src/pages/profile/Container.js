import { connect } from 'react-redux'
import Profile from './index'
import { setStore } from '../../redux/actions/store'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onTeste: () => dispatch(setStore({ teste: 'testando' }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
