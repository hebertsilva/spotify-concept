import React from 'react'
import LoadingImg from '../../static/img/loading.gif'
import './Loading.scss'

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <img src={LoadingImg} alt="Loading" width="50" />
    </div>
  )
}
