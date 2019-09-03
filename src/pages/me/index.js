import React, { Component } from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Navigation from '../../components/base/Sidebar'
import PropTypes from 'prop-types'
import { getPlaylists } from '../../redux/actions/playlists'

export class Me extends Component {
  static propTypes = {
    route: PropTypes.object,
    onGetPlaylist: PropTypes.func,
    playlists: PropTypes.array,
    isLoading: PropTypes.bool
  }

  componentDidMount() {
    if (typeof this.props.onGetPlaylist === 'function') {
      this.props.onGetPlaylist()
    }
  }

  render() {
    const { route, playlists, isLoading } = this.props

    return (
      <div className="wrapper-content">
        <Navigation playlists={playlists} isLoading={isLoading} />
        <div className="content">{renderRoutes(route.routes)}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlist.all,
  isLoading: state.playlist.isLoading
})

const mapDispatchToProps = dispatch => ({
  onGetPlaylist: () => dispatch(getPlaylists())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Me)
