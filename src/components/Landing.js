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
/*  posed component Setting  */

const textConfig = {
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
}

const buttonConfig = {
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
}
const posed_text = posed.div(textConfig)
const posed_btn = posed.div(buttonConfig)
/*  Styled component Setting  */

const LandingWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 5;
`
const LandingStyle = {
  width: '100%',
}
const HeaderStyle = {
  width: '100%',
  position: 'absolute',
  left: '0px',
  top: '0px',
  zIndex: '10',
}
const iMacStyle = {
  width: '70%',
  position: 'absolute',
  left: '50%',
  top: '0px',
  transform: 'translateX(-55%)',
  zIndex: '3',
}

const StandStyle = {
  width: '40%',
  position: 'absolute',
  left: '50%',
  top: '0px',
  transform: 'translateX(-50%)',
  zIndex: '2',
}

const PlantStyle = {
  width: '10%',
  position: 'absolute',
  left: '0',
  top: '20%',
  zIndex: '2',
}
const MouseStyle = {
  width: '4%',
  position: 'absolute',
  right: '0',
  top: '30%',
  zIndex: '2',
}

const KeyboardStyle = {
  width: '13%',
  position: 'absolute',
  right: '0',
  top: '55%',
  zIndex: '2',
}

const PencilsStyle = {
  width: '9%',
  position: 'absolute',
  right: '6%',
  top: '28%',
  zIndex: '2',
}

const LogoStyle = {
  width: '45%',
  position: 'absolute',
  left: '50%',
  top: '28%',
  transform: 'translateX(-50%)',
  zIndex: '2',
}
const ShadowStyle = {
  width: '80%',
  position: 'absolute',
  left: '-10%',
  top: '0%',
  zIndex: '4',
}

const EngtextMixin = css`
  position: absolute;
  z-index: 2;
  ${props => props.theme.fontfamilyBold};
  font-size: 3.2vw;
  color: white;
  letter-spacing: 5.83px;
  line-height: 60px;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.36);
`
const UIFlowText = styled(posed_text)`
  top: 33.5%;
  left: 35.5%;
  ${EngtextMixin};
`
const PockerCardText = styled(posed_text)`
  top: 39.5%;
  left: 35.5%;
  ${EngtextMixin};
`
const PerfectCommunicationText = styled(posed_text)`
  position: absolute;
  top: 35.5%;
  left: 59.8%;
  ${props => props.theme.fontfamilyLight};
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 7px;
  z-index: 2;
`
const BtnWrapper = styled(posed_btn)`
  position: absolute;
  left: 63%;
  top: 40%;
  width: 10.1vw;
  height: 3.1vw;
  font-size: 1.4vw;
  z-index: 10;
`
const btnCustomStyle = css`
  width: 100%;
  height: 100%;
  font-size: 1.4vw;
`
const backgroungSetting = css`
  background-color: transparent;
  background-image: linear-gradient(11deg, #6654ec 0%, #55c9f9 100%);
`

class Landing extends React.Component {
  state = { isShow: false }
  getScreenShot = () => {
    html2canvas(document.body).then(function(canvas) {
      document.body.appendChild(canvas)
    })
  }
  componentDidMount() {
    let controller = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 'onCenter' },
    })

    new ScrollMagic.Scene({
      triggerElement: this.landingWrapperDom,
      duration: '500',
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
  render() {
    return (
      <LandingWrapper innerRef={ref => (this.landingWrapperDom = ref)}>
        <UIFlowText pose={this.state.isShow ? 'open' : 'closed'}>
          UI&nbsp;&nbsp;FlOW
        </UIFlowText>
        <PockerCardText pose={this.state.isShow ? 'open' : 'closed'}>
          POKER&nbsp;CARD
        </PockerCardText>
        <PerfectCommunicationText pose={this.state.isShow ? 'open' : 'closed'}>
          打造完美溝通體驗
        </PerfectCommunicationText>
        <BtnWrapper
          onClick={this.getScreenShot}
          pose={this.state.isShow ? 'open' : 'closed'}
        >
          {' '}
          <Button
            btnText="立即購買"
            customStyle={btnCustomStyle}
            backgroungSetting={backgroungSetting}
          />
        </BtnWrapper>
        {/* <ImgBlur
          imgName="header"
          customStyle={HeaderStyle}
          WrapperClassName="is-passthrough"
        /> */}
        <PockerLayer />
        <ImgBlur
          imgName="landing-bg"
          customStyle={LandingStyle}
          WrapperClassName="is-passthrough"
        />
        <ImgBlur
          imgName="iMac"
          customStyle={iMacStyle}
          WrapperClassName="is-passthrough"
        />
        <ImgBlur
          imgName="Stand"
          customStyle={StandStyle}
          WrapperClassName="is-passthrough"
        />
        <ImgBlur
          imgName="Plant"
          customStyle={PlantStyle}
          WrapperClassName="is-passthrough"
        />
        <ImgBlur
          imgName="Mouse"
          customStyle={MouseStyle}
          WrapperClassName="is-passthrough"
        />
        <ImgBlur
          imgName="Keyboard"
          customStyle={KeyboardStyle}
          WrapperClassName="is-passthrough"
        />
        <ImgBlur
          imgName="Pencils"
          customStyle={PencilsStyle}
          WrapperClassName="is-passthrough"
        />
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
