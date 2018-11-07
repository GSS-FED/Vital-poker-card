import React from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgBlur'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'
import posed, { PoseGroup } from 'react-pose'
import { desktopStyle } from '../layout'

const Box = posed.div({
  draggable: true,
  hoverable: true,
  init: { scale: 1 },
  drag: { scale: 1.03 },
  hover: { scale: 1.05 },
  dragEnd: { transition: { type: 'spring', stiffness: 500 } },
})

const Fox = posed.div({
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 },
  hover: { scale: 13 },
  dragEnd: { x: 0, y: 0 },
})

const WhatYouCanDoWrapper = styled.div`
  position: relative;
  height: 83.43vw;
  width: 100vw;
  background-color: white;
  z-index: 2;
  overflow: hidden;
`
const CircleWrapper = styled(Box)`
  position: absolute;
  ${desktopStyle};
  background-color: transparent;
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
  &.is-noborder {
    z-index: 1;
    border-color: rgba(53, 57, 66, 0);
    box-shadow: none;
    pointer-events: none;
    div {
      opacity: 0;
      transition: opacity 0.35s ease-in-out 0.1s;
    }
    &.is-alien-show {
      div {
        opacity: 1;
      }
    }
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
  ${desktopStyle};
  background-color: transparent;
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
  ${props => props.theme.fontfamilyBold};
  z-index: 3;
  font-size: 7vw;
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
  ${props => props.theme.fontfamilyReglar};
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
  left: 0%;
  width: 100%;
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
  state = {
    isAlienShow: false,
  }
  componentDidMount() {
    console.log('componentDidMount')
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 'onEnter' },
    })

    new ScrollMagic.Scene({
      triggerElement: '#sec2',
      duration: '1000',
      offset: 500,
      duration: 700,
    })
      .setClassToggle(
        '#card-wrapper,#circlewrapper1,#circlewrapper2,#circlewrapper3,#sec2_what,#sec2_YCD,#trianglewrapper',
        'is-show'
      )
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller)
  }

  onDragStart = () => {
    this.setState({ isAlienShow: true })
  }
  onDragEnd = () => {
    this.setState({ isAlienShow: false })
  }
  render() {
    return (
      <WhatYouCanDoWrapper id="sec2">
        <What id="sec2_what">WHAT</What>
        <YouGet id="sec2_YCD">YOU CAN DO</YouGet>
        <BgWrapper id="card-wrapper">
          <ImgBlur
            imgName="sec2-bg"
            customStyle={bgStyle}
            WrapperClassName="is-passthrough"
          />
        </BgWrapper>{' '}
        <BgWrapper className="layer2">
          <CircleWrapper
            id="circlewrapper1"
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            t={106}
            l={452}
            w={370}
            h={370}
            wh={1068}
          >
            <ImgBlur
              imgName="circle-content1"
              customStyle={CCStyle1}
              WrapperClassName="is-passthrough"
            />
          </CircleWrapper>
          <CircleWrapper
            className={
              this.state.isAlienShow
                ? 'is-noborder is-alien-show'
                : 'is-noborder'
            }
            t={106}
            l={452}
            w={370}
            h={370}
            wh={1068}
          >
            <ImgBlur
              imgName="alien03"
              customStyle={CCStyle2}
              WrapperClassName="is-passthrough"
            />
          </CircleWrapper>
          <CircleWrapper
            className="position2"
            id="circlewrapper2"
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            t={544}
            l={452}
            w={370}
            h={370}
            wh={1068}
          >
            <ImgBlur
              imgName="circle-content2"
              customStyle={CCStyle2}
              WrapperClassName="is-passthrough"
            />
          </CircleWrapper>
          <CircleWrapper
            className={
              this.state.isAlienShow
                ? 'position2 is-noborder is-alien-show'
                : 'position2 is-noborder'
            }
            t={544}
            l={452}
            w={370}
            h={370}
            wh={1068}
          >
            <ImgBlur
              imgName="alien01"
              customStyle={CCStyle2}
              WrapperClassName="is-passthrough"
            />
          </CircleWrapper>

          <CircleWrapper
            className="position3"
            id="circlewrapper3"
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            t={336}
            l={836}
            w={370}
            h={370}
            wh={1068}
          >
            <ImgBlur
              imgName="circle-content3"
              customStyle={CCStyle3}
              WrapperClassName="is-passthrough"
            />
          </CircleWrapper>
          <CircleWrapper
            className={
              this.state.isAlienShow
                ? 'position3 is-noborder is-alien-show'
                : 'position3 is-noborder'
            }
            t={336}
            l={836}
            w={370}
            h={370}
            wh={1068}
          >
            <ImgBlur
              imgName="alien02"
              customStyle={CCStyle2}
              WrapperClassName="is-passthrough"
            />
          </CircleWrapper>
          <TriangleWrapper
            id="trianglewrapper"
            t={779}
            l={870}
            w={161}
            h={92}
            wh={1068}
          >
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
