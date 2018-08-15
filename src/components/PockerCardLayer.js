import React, { createRef, forwardRef } from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgTraceSvg'
import DragHighOrder from '../component__highOrder/DragMove'

// compose function
// const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const PockerCardDragPlayground = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(254, 223, 237, 0);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
`
const CardStyle = {
  position: 'absolute',
  width: '9%',
  left: '60%',
  top: '70%',
  zIndex: '2',
}
const CardStyle2 = {
  position: 'absolute',
  width: '9%',
  left: '30%',
  top: '70%',
  zIndex: '2',
}
const BasicCardStyle = {
  width: '100%',
}
const Wrapper = {
  position: 'absolute',
  width: '9%',
  left: '30%',
  top: '70%',
  zIndex: '4',
}

class PockerCardWrapper extends React.Component {
  render() {
    let box = {
      transform: `
      translateX(${this.props.mouseX}px) 
      translateY(${this.props.mouseY}px) 
      rotate(${this.props.rotate}deg)`,
      'transform-origin': '50% 50%',
    }
    const StyleMerged = { ...CardStyle, ...box }
    return (
      <div
        style={StyleMerged}
        ref={ref => {
          this.refs = ref
        }}
      >
        {/* {this.props.mouseX}, {this.props.mouseY} */}
        <ImgBlur imgName={this.props.imgName} customStyle={BasicCardStyle} />
      </div>
    )
  }
}

// const withData; // withDate(component)
// const withUser;
const DragCard = DragHighOrder(PockerCardWrapper)
// compose(
//   withDate,
//   withUser,
//   DragHighOrder,
// )(Component)
// DrageHighOrder(setting)(componet)
// DrageHighOrder = (setting) => (component) => component

class whatYouCanDo extends React.Component {
  state = {}
  componentDidMount() {
    console.log(this.ref, '/?????')
  }
  render() {
    return (
      <PockerCardDragPlayground>
        <DragCard imgName="poker0703" />
        <DragCard imgName="poker0303" />
        <div ref={ref => (this.ref = ref)}>test</div>
        <ImgBlur imgName="poker0703" customStyle={CardStyle2} />
      </PockerCardDragPlayground>
    )
  }
}

const Button = forwardRef((props, ref) => <div ref={ref}>test</div>)

export default whatYouCanDo
