import React, { createRef, forwardRef } from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgTraceSvg'
import DragHighOrder from '../component__highOrder/DragMove'

const PockerCardDragPlayground = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(254, 223, 237, 0);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
`
const CardStyle1 = {
  position: 'absolute',
  width: '9%',
  left: '35%',
  top: '55%',
  zIndex: '2',
}

const CardStyle2 = {
  position: 'absolute',
  width: '9%',
  left: '45%',
  top: '55%',
  zIndex: '2',
}

const CardStyle3 = {
  position: 'absolute',
  width: '9%',
  left: '55%',
  top: '55%',
  zIndex: '2',
}
const CardStyle4 = {
  position: 'absolute',
  width: '9%',
  left: '65%',
  top: '55%',
  zIndex: '2',
}
const BasicCardStyle = {
  width: '100%',
}
const Wrapper = {
  position: 'absolute',
  width: '9%',
  left: '30%',
  top: '50%',
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
    const StyleMerged = { ...this.props.customStyle, ...box }
    return (
      <div
        style={StyleMerged}
        ref={ref => {
          this.refs = ref
        }}
      >
        <ImgBlur
          imgName={this.props.imgName}
          customStyle={BasicCardStyle}
          WrapperClassName=""
        />
        <ImgBlur
          imgName={'pocker-shadow'}
          customStyle={BasicCardStyle}
          WrapperClassName="is-shadow"
        />
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

class PockerCardLayer extends React.Component {
  state = {}
  componentDidMount() {
    console.log(this.ref, '/?????')
  }
  render() {
    return (
      <PockerCardDragPlayground>
        <DragCard imgName="poker0703" customStyle={CardStyle1} />
        <DragCard imgName="poker0303" customStyle={CardStyle2} />
        <DragCard imgName="poker1004" customStyle={CardStyle3} />
        <DragCard imgName="poker1201" customStyle={CardStyle4} />
      </PockerCardDragPlayground>
    )
  }
}

export default PockerCardLayer
