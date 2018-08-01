import React from 'react'
import styled from 'styled-components'
import Img from './LandingQueryImg'

const LandingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`

const Landing = () => (
  <LandingWrapper>
    <Img imgName="iMac" />
  </LandingWrapper>
)

export default Landing
