import React from 'react'
import styled, { css } from 'styled-components'
import ImgBlur from './QueryImgBlur'
import PockerLayer from './PockerCardLayer'
import Button from './Button'
import posed from 'react-pose'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'
import html2canvas from 'html2canvas'
import {
  desktopPositionStyle,
  desktopStyle,
  wrapperStyle,
  mobileStyle,
} from '../layout'
/*  posed component Setting  */

const posed_text = posed.div({
  open: {
    y: 0,
    opacity: 1,
    delay: 700,
    transition: {
      duration: 500,
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 200,
    },
  },
})

const HeaderOCConfig = posed.div({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 700,
    },
  },
  closed: {
    y: '-100%',
    opacity: 1,
    transition: {
      duration: 500,
    },
  },
})

const posed_btn = posed.div({
  open: {
    opacity: 1,
    scale: 1,
    delay: 1400,
    transition: {
      duration: 300,
    },
  },
  closed: {
    scale: 0.3,
    opacity: 0,
    transition: {
      duration: 200,
    },
  },
})

const LandingWrapper = styled.div`
  position: relative;
  height: 72.8124vw;
  width: 100vw;
  background-color: white;
  z-index: 5;
  overflow:hidden;
  /* @media (max-width: 768px) {
    ${wrapperStyle};
  } */
`

const ImageStyleWarpper = styled.div`
  ${desktopStyle};
  z-index: ${props => (props.zi ? props.zi : 2)};
  pointer-events: none;
`

const ShadowStyle = {
  width: '80%',
  position: 'absolute',
  left: '-10%',
  top: '0%',
  zIndex: '4',
}

const EngtextMixin = css`
  z-index: 3;
  ${props => props.theme.fontfamilyBold};
  ${desktopPositionStyle};
  font-size: ${props => (props.fs / 1280) * 100}vw;
  color: white;
  letter-spacing: 5.83px;
  line-height: ${(60 / 1280) * 100}vw;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.36);
`
const UIFlowText = styled(posed_text)`
  ${EngtextMixin};
`
const PockerCardText = styled(posed_text)`
  ${EngtextMixin};
`
const PerfectCommunicationText = styled(posed_text)`
  position: absolute;
  ${desktopPositionStyle};
  ${props => props.theme.fontfamilyLight};
  font-size: ${props => (props.fs / 1280) * 100}vw;
  color: #ffffff;
  letter-spacing: ${(7 / 1280) * 100}vw;
  z-index: 3;
  @media (max-width: 768px) {
    left: 64%;
  }
`
const BtnWrapper = styled(posed_btn)`
  ${desktopStyle};

  font-size: ${props => (props.fs / 1280) * 100}vw;
  z-index: 10;
  @media (max-width: 768px) {
    left: 73%;
  }
`
const backgroungSetting = css`
  background-color: transparent;
  background-image: linear-gradient(11deg, #6654ec 0%, #55c9f9 100%);
`

class Landing extends React.Component {
  state = { isShow: false, isShowHeader: true }
  getScreenShot = () => {
    this.setState({ isShow: false })
    setTimeout(() => {
      html2canvas(this.landingWrapperDom).then(function(canvas) {
        document.body.appendChild(canvas)
      })
    }, 700)
  }
  goShoping = () => {
    window.open(
      'https://shopee.tw/desbear/1322856210?version=7050b5b8ee13329ad770f300e1f9d4ea',
      '_blank'
    )
  }
  componentDidMount() {
    window.onscroll = this.scrollDiraction
    let controller = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 'onCenter' },
    })

    new ScrollMagic.Scene({
      triggerElement: this.landingWrapperDom,
      duration: '700',
      offset: 0,
    })
      //.addIndicators() // add indicators (requires plugin)
      .on('enter', () => {
        this.setState({ isShow: true })
      })
      .on('leave', () => {
        this.setState({ isShow: false })
      })
      .addTo(controller)
  }
  scrollDiraction = event => {
    var st = window.pageYOffset || document.documentElement.scrollTop
    let direction = st > window['lastScrollTop'] ? 'down' : 'up'

    window['lastScrollTop'] = st <= 0 ? 0 : st
    console.log(direction)
    if (direction === 'up' && !this.state.isShowHeader)
      this.setState({ isShowHeader: true })
    else if (direction === 'down' && this.state.isShowHeader)
      this.setState({ isShowHeader: false })
  }
  render() {
    return (
      <LandingWrapper ref={ref => (this.landingWrapperDom = ref)}>
        <UIFlowText
          pose={this.state.isShow ? 'open' : 'closed'}
          t={311}
          l={452}
          fs={42}
          wh={932}
        >
          UI&nbsp;&nbsp;FlOW <br />
          POKER&nbsp;CARD
        </UIFlowText>
        <PerfectCommunicationText
          pose={this.state.isShow ? 'open' : 'closed'}
          t={329}
          l={753}
          fs={18}
          wh={932}
        >
          打造完美溝通體驗
        </PerfectCommunicationText>
        <BtnWrapper
          onClick={this.goShoping}
          pose={this.state.isShow ? 'open' : 'closed'}
          t={378}
          l={816}
          w={130}
          h={40}
          fs={18}
          wh={932}
        >
          {' '}
          <Button btnText="立即購買" backgroungSetting={backgroungSetting} />
        </BtnWrapper>
        {
          <ImageStyleWarpper w={1280} h={100} t={0} l={0} wh={932} zi={7}>
            <HeaderOCConfig pose={this.state.isShowHeader ? 'open' : 'closed'}>
              <ImgBlur imgName="header" WrapperClassName="is-passthrough" />
            </HeaderOCConfig>
          </ImageStyleWarpper>
        }
        <PockerLayer />
        <ImageStyleWarpper w={1280} h={932} t={0} l={0} wh={932} zi={2}>
          <ImgBlur imgName="landing-bg" WrapperClassName="is-passthrough" />
        </ImageStyleWarpper>
        <ImageStyleWarpper w={1280} h={547} t={-56} l={-54} wh={932} zi={6}>
          <ImgBlur imgName="iMac" WrapperClassName="is-passthrough" />
        </ImageStyleWarpper>
        <ImageStyleWarpper w={690} h={489} t={-119} l={308} wh={932} zi={5}>
          <ImgBlur imgName="Stand" WrapperClassName="is-passthrough" />
        </ImageStyleWarpper>
        <ImageStyleWarpper w={506} h={520} t={132} l={-336} wh={932} zi={5}>
          <ImgBlur imgName="Plant" WrapperClassName="is-passthrough" />
        </ImageStyleWarpper>
        <ImageStyleWarpper w={96} h={160} t={280} l={1213} wh={932} zi={5}>
          <ImgBlur imgName="Mouse" WrapperClassName="is-passthrough" />
        </ImageStyleWarpper>
        <ImageStyleWarpper w={492} h={246} t={500} l={1072} wh={932} zi={5}>
          <ImgBlur imgName="Keyboard" WrapperClassName="is-passthrough" />
        </ImageStyleWarpper>
        <ImageStyleWarpper w={139} h={234} t={266} l={1040} wh={932} zi={5}>
          <ImgBlur imgName="Pencils" WrapperClassName="is-passthrough" />
        </ImageStyleWarpper>
        <ImgBlur
          imgName="shadow"
          customStyle={ShadowStyle}
          WrapperClassName="is-passthrough"
        />
      </LandingWrapper>
    )
  }
}

export default Landing
