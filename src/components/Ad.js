import React, { createRef, forwardRef } from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgBlur'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'
import posed, { PoseGroup } from 'react-pose'

/* animation state setting & init  */

const AdWrpaaer = styled.div`
  position: relative;
  height: 65vh;
  width: 100vw;
  text-align: center;
  overflow: hidden;
`

const BigTitle = styled.div`
  position: absolute;
  font-size: 3vw;
  ${props => props.theme.fontfamilyBold};
  color: #464545;
  top: 20%;
  left: 30%;
  color: #000000;
  z-index: 2;
`
const BgWrapper = styled.div`
  position: absolute;
  left: 1%;
  width: 45%;
  top: 5%;
  z-index: 1;
`

const ImgbasicStyle = {
  witdh: '100%',
}
/* ------------------------------- */
class Ad extends React.Component {
  state = {
    isNumberRun: false,
    isOpen: false,
  }
  handleMenuOpenClick = isOpen => {
    console.log(this.state.isOpen)
    this.setState({ isOpen: !this.state.isOpen })
  }
  componentDidMount() {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 'onCenter' },
    })
    new ScrollMagic.Scene({
      triggerElement: '#sec',
      duration: '1000',
      duration: 600,
    })
      .on('enter', () => {
        this.handleMenuOpenClick(true)
      })
      .on('leave', () => {
        this.handleMenuOpenClick(false)
      })
      .addTo(controller)
  }
  render() {
    return (
      <AdWrpaaer id="sec5">
        <BigTitle>Vital UI Flow Poker Card 上架囉！！</BigTitle>
        <BgWrapper>
          <ImgBlur
            imgName="sec5-bg"
            customStyle={ImgbasicStyle}
            WrapperClassName=""
          />
        </BgWrapper>
      </AdWrpaaer>
    )
  }
}

export default Ad
