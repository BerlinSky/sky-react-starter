import React from 'react'
import { bool } from 'prop-types'
import { connect } from 'react-redux'

const Home = (props) => {
  const { isMobile } = props

  return (
    <div className = "Home">
      <h1> Home </h1> 

      <p>
        <div>
          You are using: 
        </div>
        <strong>{ isMobile ? 'mobile' : 'desktop' }</strong>
      </p>
    </div>
  )
}

Home.prototype = {
  isMobile: bool
}

function mapStateToProps(state) {
  return {
    isMobile: state.device.isMobile
  }
}

function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)