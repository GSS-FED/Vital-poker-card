import React, { createRef, forwardRef } from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgBlur'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'
import CountUp from 'react-countup'

const WhatYouGetWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`
const LeftBlock = styled.div`
  position: relative;
  width: 67%;
  height: 100%;
  background-color: transparent;
  display: inline-block;
  vertical-align: top;
  overflow: visible;
  z-index: 2;
  &:before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background-color: rgba(53, 57, 66, 0.7);
    z-index: 2;
    transition: 0.35s background-color ease-in-out;
  }
  div {
    opacity: 0;
    transition: 0.8s opacity ease-in-out 0.35s;
  }
  &.is-show {
    &:before {
      background-color: rgba(53, 57, 66, 1);
    }
    div {
      opacity: 1;
    }
  }
`
const RightBlock = styled.div`
  position: relative;
  width: 33%;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  z-index: 1;
  opacity: 0.7;
  transition: 0.35s opacity ease-in-out;
  &.is-show {
    opacity: 1;
  }
`

const What = styled.span`
  position: absolute;
  z-index: 3;
  font-size: 7vw;
  ${props => props.theme.fontfamilyBold};
  top: 40%;
  left: 11%;
  color: white;
  opacity: 0;
  transform: translateY(70px);
  transition: transform 0.85s ease-out 0.5s, opacity 0.35s ease-in-out 0.5s;
  &.is-show {
    opacity: 1;
    transform: translateY(0px);
  }
`
const YouGet = styled.span`
  position: absolute;
  z-index: 3;
  font-size: 3vw;
  ${props => props.theme.fontfamilyReglar};
  top: 55%;
  left: 12%;
  color: white;
  opacity: 0;
  transform: translateY(70px);
  transition: transform 0.85s ease-out 0.6s, opacity 0.35s ease-in-out 0.6s;
  &.is-show {
    opacity: 1;
    transform: translateY(0px);
  }
`

const NumberWrapper = styled.span`
  position: absolute;
  left: 50%;
  top: 7%;
  z-index: 3;
  font-family: 'PingFang TC';
  font-size: 10vw;
  font-weight: 100;
  color: #81e0fd;
  &.w2 {
    top: 37%;
  }
  &.w3 {
    top: 67%;
  }
`
const Text = styled.span`
  position: relative;
  font-family: 'PingFang TC';
  font-size: 3vw;
  color: #ffffff;
  opacity: 0.8;
  letter-spacing: 3px;
  text-align: center;
`

const BgStyle = {
  width: '100%',
}

const ShadowStyle = {
  position: 'absolute',
  top: '-10%',
  left: '95%',
  width: '10.5%',
}

class WhatYouGet extends React.Component {
  state = {
    isNumberRun: false,
  }
  componentDidMount() {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 'onEnter' },
    })

    new ScrollMagic.Scene({
      triggerElement: '#sec3',
      duration: '1000',
      offset: 300,
      duration: 600,
    })
      .setClassToggle('#sec3-left,#sec3-right,#what,#youget', 'is-show')
      //.addIndicators() // add indicators (requires plugin)
      .on('enter', () => {
        this.setState({ isNumberRun: true })
        console.log('#sec3 enter', this.state.isNumberRun)
      })
      .on('leave', () => {
        this.setState({ isNumberRun: false })
        console.log('#sec3 enter', this.state.isNumberRun)
      })
      .addTo(controller)
  }
  render() {
    return (
      <WhatYouGetWrapper id="sec3">
        <LeftBlock id="sec3-left">
          <NumberWrapper>
            {this.state.isNumberRun && (
              <>
                <CountUp start={14} end={54} duration={4.5} />
                <Text>張牌</Text>
              </>
            )}
          </NumberWrapper>
          <NumberWrapper className="w2">
            {this.state.isNumberRun && (
              <>
                <CountUp start={7} end={2} duration={4.5} />
                <Text>款鬼牌設計</Text>
              </>
            )}
          </NumberWrapper>
          <NumberWrapper className="w3">
            {this.state.isNumberRun && (
              <>
                <CountUp start={7} end={28} duration={4.5} />
                <Text>款UI介面</Text>
              </>
            )}
          </NumberWrapper>
          <What id="what">WHAT</What>
          <YouGet id="youget">YOU GET</YouGet>

          <ImgBlur
            imgName="layer-shadow"
            customStyle={ShadowStyle}
            WrapperClassName="is-passthrough"
          />
        </LeftBlock>
        <RightBlock id="sec3-right">
          <ImgBlur
            imgName="right-block"
            customStyle={BgStyle}
            WrapperClassName="is-passthrough"
          />
        </RightBlock>
      </WhatYouGetWrapper>
    )
  }
}

export default WhatYouGet
