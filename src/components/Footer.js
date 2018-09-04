import React, { createRef, forwardRef } from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgBlur'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'

/* animation state setting & init  */

const FooterWrapper = styled.div`
  position: relative;
  height: 20vh;
  width: 100vw;
  text-align: center;
  background-color: #464545;
`
const VitallogoWrapper = styled.div`
  position: absolute;
  top: 17%;
  left: 25%;
  width: 8%;
`

const Textbox = styled.div`
  position: absolute;
  top: 30%;
  left: 34.5%;
  ${props => props.theme.fontfamilyReglar};
  color: rgba(255, 255, 255, 0.5);
  font-size: 1vw;
`
const Textbox2 = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  ${props => props.theme.fontfamilyReglar};
  color: rgba(255, 255, 255, 0.5);
  font-size: 1vw;
`

const Textbox3 = styled.div`
  position: absolute;
  top: 60%;
  left: 25%;
  ${props => props.theme.fontfamilyReglar};
  color: rgba(255, 255, 255, 0.5);
  font-size: 1vw;
`
const Textbox4 = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  ${props => props.theme.fontfamilyReglar};
  color: rgba(255, 255, 255, 0.5);
  font-size: 1vw;
`

const ImgbasicStyle = {
  witdh: '100%',
}

/* ------------------------------- */
class Footer extends React.Component {
  state = {
    isNumberRun: false,
    isOpen: false,
  }
  handleMenuOpenClick = isOpen => {
    console.log(this.state.isOpen)
    this.setState({ isOpen: !this.state.isOpen })
  }
  componentDidMount() {
    let controller = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 'onCenter' },
    })
    new ScrollMagic.Scene({
      triggerElement: '#sec6',
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
      <FooterWrapper id="sec6">
        <VitallogoWrapper>
          <ImgBlur
            imgName="sec6-logo"
            customStyle={ImgbasicStyle}
            WrapperClassName="is-passthrough"
          />
        </VitallogoWrapper>

        <Textbox>© 叡揚資訊股份有限公司</Textbox>
        <Textbox2>聯絡電話：0225867890轉145</Textbox2>
        <Textbox3>台北總公司: 10461台北市中山區德惠街9號5樓</Textbox3>
        <Textbox4>高雄辦公室: 高雄市鼓山區明華路317號6樓</Textbox4>
      </FooterWrapper>
    )
  }
}

export default Footer
