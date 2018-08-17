import React from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgBlur'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'
import posed, { PoseGroup } from 'react-pose'

const Box = posed.div({
  draggable: true,
  // dragBounds: { left: '-100%', right: '100%' },
  dragEnd: { transition: { type: 'spring' } },
})

const WhatYouCanDoWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 2;
  overflow: hidden;
`
const CircleWrapper = styled(Box)`
  position: absolute;
  top: 10%;
  left: 45%;
  background-color: transparent;
  width: 20vw;
  height: 20vw;
  z-index: 2;
  border-radius: 50%;
  box-shadow: 0 16px 29px -13px rgba(0, 0, 0, 0);
  box-sizing: border-box;
  border: 1px solid;
  border-color: rgba(53, 57, 66, 0.2);
  transition: box-shadow 0.65s ease-in-out 0.5s,
    background-color 0.65s ease-in-out 0.5s, border-color 0.35s ease-in-out;
  div {
    opacity: 0;
    transition: opacity 1.35s ease-in-out 0.5s;
  }
  &.position2 {
    top: 55%;
  }
  &.position3 {
    top: 32.5%;
    left: 76%;
  }
  &.is-show {
    border-color: rgba(53, 57, 66, 1);
    background-color: #353942;
    box-shadow: 0 16px 29px -13px rgba(0, 0, 0, 0.5);
    div {
      opacity: 1;
    }
  }
`

const TriangleWrapper = styled(Box)`
  position: absolute;
  top: 75%;
  left: 79%;
  background-color: transparent;
  width: 9vw;
  height: 9vw;
  opacity: 0.2;
  transition: opacity 0.35s ease-in-out;
  .is-passthrough {
    opacity: 0;
    transition: opacity 0.65s ease-in-out 0.5s;
  }
  &.is-show {
    opacity: 1;
    .is-passthrough {
      opacity: 1;
    }
  }
`

const What = styled.span`
  position: absolute;
  z-index: 3;
  font-size: 7vw;
  font-family: 'PingFang TC';
  top: 40%;
  left: 11%;
  color: #353942;
  opacity: 0;
  transform: translateY(70px);
  transition: transform 0.85s ease-out 1.2s, opacity 0.35s ease-in-out 1.2s;
  &.is-show {
    opacity: 1;
    transform: translateY(0px);
  }
`
const YouGet = styled.span`
  position: absolute;
  z-index: 3;
  font-size: 3vw;
  font-family: 'PingFang TC';
  top: 55%;
  left: 12%;
  color: #353942;
  opacity: 0;
  transform: translateY(70px);
  transition: transform 0.85s ease-out 1.3s, opacity 0.35s ease-in-out 1.3s;
  &.is-show {
    opacity: 1;
    transform: translateY(0px);
  }
`

const BgWrapper = styled.div`
  position: absolute;
  left: 10%;
  width: 70%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-out 1.5s,
    transform 1.2s cubic-bezier(0, 0.73, 0.16, 1.01);
  transform: translateX(0px);
  z-index: 1;
  &.is-show {
    opacity: 1;
    transform: translateX(0px);
  }
  &.layer2 {
    transform: translateX(0px);
    opacity: 1;
    z-index: 2;
  }
`
const bgStyle = {
  width: '100%',
}
const CCStyle1 = {
  position: 'absolute',
  top: '10%',
  left: '13.5%',
  width: '73%',
}
const CCStyle2 = {
  position: 'absolute',
  top: '10%',
  left: '9%',
  width: '85%',
}
const CCStyle3 = {
  position: 'absolute',
  top: '10%',
  left: '-5%',
  width: '115%',
}
const TriangleStyle = {
  position: 'absolute',
  top: '0%',
  left: '0%',
  width: '100%',
}

const TriangleStyle2 = {
  position: 'absolute',
  top: '0%',
  left: '0%',
  width: '101%',
}
const dragbox = {
  width: '100px',
  height: '100px',
  backgroundColor: '#fedfed',
}

class whatYouCanDo extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 'onEnter' },
    })

    new ScrollMagic.Scene({
      triggerElement: '#sec2',
      duration: '700',
      offset: 500,
      duration: 600,
    })
      .setClassToggle(
        '#card-wrapper,#circlewrapper1,#circlewrapper2,#circlewrapper3,#sec2_what,#sec2_YCD,#trianglewrapper',
        'is-show'
      )
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller)
  }
  render() {
    return (
      <WhatYouCanDoWrapper id="sec2">
        <What id="sec2_what">What</What>
        <YouGet id="sec2_YCD">You Can Do</YouGet>
        <BgWrapper id="card-wrapper">
          <ImgBlur
            imgName="sec2-bg"
            customStyle={bgStyle}
            WrapperClassName="is-passthrough"
          />
        </BgWrapper>{' '}
        <BgWrapper className="layer2">
          <CircleWrapper id="circlewrapper1">
            <ImgBlur
              imgName="circle-content1"
              customStyle={CCStyle1}
              WrapperClassName="is-passthrough"
            />
          </CircleWrapper>
          <CircleWrapper className="position2" id="circlewrapper2">
            <ImgBlur
              imgName="circle-content2"
              customStyle={CCStyle2}
              WrapperClassName="is-passthrough"
            />
          </CircleWrapper>
          {/* <Box> */}
          <CircleWrapper className="position3" id="circlewrapper3">
            <ImgBlur
              imgName="circle-content3"
              customStyle={CCStyle3}
              WrapperClassName="is-passthrough"
            />
          </CircleWrapper>
          <TriangleWrapper id="trianglewrapper">
            <ImgBlur
              imgName="triangleborder"
              customStyle={TriangleStyle}
              WrapperClassName=""
            />
            <ImgBlur
              imgName="triangle"
              customStyle={TriangleStyle2}
              WrapperClassName="is-passthrough"
            />
          </TriangleWrapper>
          {/* </Box> */}
        </BgWrapper>
      </WhatYouCanDoWrapper>
    )
  }
}

export default whatYouCanDo
