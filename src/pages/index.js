import React from 'react'
import Landing from '../components/Landing'
import WhatYouCanDo from '../components/whatYouCanDo'
import '../css/reset.css'

class IndexPage extends React.Component {
  state = {}
  render() {
    return (
      <>
        <Landing /> <WhatYouCanDo />
      </>
    )
  }
}

export default IndexPage
