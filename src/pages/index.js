import React from 'react'
import Landing from '../components/Landing'
import WhatYouCanDo from '../components/whatYouCanDo'
import WhatYouGet from '../components/WhatYouGet'
import FAQ from '../components/FAQ'
import '../css/reset.css'

class IndexPage extends React.Component {
  state = {}
  render() {
    return (
      <>
        <Landing /> <WhatYouCanDo />
        <WhatYouGet /> <FAQ />
      </>
    )
  }
}

export default IndexPage
