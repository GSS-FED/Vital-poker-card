import React from 'react'
import styled, { css } from 'styled-components'
import ImgBlur from './QueryImgBlur'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'
import posed, { PoseGroup } from 'react-pose'
import PockerButton from './Button'

/* animation state setting & init  */

const AdWrpaaer = styled.div`
  position: relative;
  height: 44.14vw;
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
const TextBox = styled.div`
  position: absolute;
  left: 70%;
  top: 50%;
  color: #464545;
  font-size: 2vw;
  ${props => props.theme.fontfamilyLight};
  font-weight: 100;
`
const TextBox2 = styled.div`
  position: absolute;
  left: 74.5%;
  top: 70%;
  color: #464545;
  font-size: 2vw;
  ${props => props.theme.fontfamilyLight};
`
const BoldText = styled.span`
  font-weight: 900;
`

const ImgbasicStyle = {
  witdh: '100%',
}
const buttonStyle = {
  position: 'absolute',
  left: '43%',
  top: '43%',
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
      triggerElement: this.adwrapper,
      duration: '1000',
      duration: 600,
    })
      .on('enter', () => {
        this.handleMenuOpenClick(true)
      })
      .on('leave', () => {
        //this.handleMenuOpenClick(false)
      })
      .addTo(controller)
  }
  render() {
    return (
      <AdWrpaaer id="sec5" innerRef={comp => (this.adwrapper = comp)}>
        <BigTitle>Vital UI Flow Poker Card 上架囉！！</BigTitle>
        <BgWrapper>
          <ImgBlur
            imgName="sec5-bg"
            customStyle={ImgbasicStyle}
            WrapperClassName=""
          />
        </BgWrapper>
        <TextBox>比起文字</TextBox>
        <TextBox2>
          <BoldText>圖像</BoldText>
          &nbsp;&nbsp;更有感覺
        </TextBox2>
        <PockerButton btnText="立即購買" customStyle={buttonStyle} />
      </AdWrpaaer>
    )
  }
}

export default Ad
