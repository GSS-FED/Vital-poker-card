import React from 'react'
import Landing from '../components/Landing'
import WhatYouCanDo from '../components/whatYouCanDo'
import WhatYouGet from '../components/WhatYouGet'
import FAQ from '../components/FAQ'
import '../css/reset.css'
import '../css/font.css'
import { ThemeProvider } from 'styled-components'
import Ad from '../components/Ad'
import Footer from '../components/Footer'

const theme = {
  fontfamilyReglar: {
    fontFamily: 'GoogleSans-Regular,PingFangTC-Regular,Arial, sans-serif',
    fontWeight: 'normal',
  },
  fontfamilyBold: {
    fontFamily: 'GoogleSans-Bold,PingFangTC-Regular,Arial, sans-serif',
    fontWeight: 'bold',
  },
  fontfamilyLight: {
    fontFamily: 'PingFangTC,Arial, sans-serif',
    fontWeight: 'lighter',
  },
}

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Landing /> <WhatYouCanDo />
        <WhatYouGet /> <FAQ /> <Ad />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default IndexPage
