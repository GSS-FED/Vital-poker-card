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
import { Helmet } from 'react-helmet'
import ogimgae from '../img/meta/og-vitalpokercard.png'
import UploadLoading from '../components/UploadLoading'

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
    fontWeight: '100',
  },
}

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <UploadLoading /> */}
        <Landing />
        <WhatYouCanDo />
        <WhatYouGet />
        {/* <FAQ /> */}
        <Ad />
        <Footer />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vital UI Flow Pocker Card 打造完美溝通體驗</title>
          <meta
            property="og:image"
            content={'https://gss-fed.github.io' + ogimgae}
          />
          <meta
            property="og:description"
            content="Vital UI Flow Pocker Card 打造完美溝通體驗"
          />
          <meta property="og:title" content="Vital UI Flow Pocker Card" />
          <meta
            property="og:url"
            content="https://gss-fed.github.io/Vital-poker-card/"
          />
        </Helmet>
      </>
    </ThemeProvider>
  )
}

export default IndexPage
