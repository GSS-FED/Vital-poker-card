import React, { createRef, forwardRef } from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgBlur'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'
import posed, { PoseGroup } from 'react-pose'

/* animation state setting & init  */

const QuestionitemConfig = {
  open: { y: 0, opacity: 1, backgroundColor: '#ffffff' },
  closed: { y: 100, opacity: 0, backgroundColor: '#000000' },
}
const Item = posed.div(QuestionitemConfig)

const QuestionOutterConfig = {
  open: { x: '0%', delayChildren: 300, staggerChildren: 200 },
  closed: {
    x: '0%',
    delay: 300,
    staggerChildren: 100,
    staggerDirection: -1,
  },
  initialPose: 'closed',
}
const QOW = posed.div(QuestionOutterConfig)
/* ------------------------------- */

/* stylecomponent  init  */
const FAQWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 10%;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(225deg, #f3f3f3 0%, #e7e7e7 100%);
  text-align: center;
`
const HCWHPY = styled.div`
  position: absolute;
  width: auto;
  top: 5%;
  left: 7%;
  ${props => props.theme.fontfamilyBold};
  font-size: 3vw;
  color: #000000;
`

const QusetionOutterWrapper = styled(QOW)`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 80%;
  top: 20%;
`
const QusetionItemsWrapper = styled(Item)`
  background: #ffffff;
  box-shadow: -12px 22px 18px -15px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  min-height: 100px;
  width: 100%;
  margin-bottom: 2%;
`
const CommunityBtnWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: -3%;
  width: 13vw;
  cursor: pointer;
`
const FlowerWrapeer = styled.div`
  position: absolute;
  left: 0%;
  top: 45%;
  width: 7vw;
  cursor: pointer;
`
const BookWrapeer = styled.div`
  position: absolute;
  right: 0%;
  top: 55%;
  width: 17vw;
  cursor: pointer;
`
const FAQText = styled.div`
  position: absolute;
  font-size: 10vw;
  ${props => props.theme.fontfamilyBold};
  color: #464545;
  top: 20%;
  left: 7%;
`
const ImgbasicStyle = {
  witdh: '100%',
}
/* ------------------------------- */
class FAQ extends React.Component {
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
      triggerElement: '#sec4',
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
      <FAQWrapper id="sec4">
        <FAQText>FAQ</FAQText>
        <HCWHPY>How can we help you ?</HCWHPY>
        <CommunityBtnWrapper>
          <ImgBlur
            imgName="communitybtn"
            customStyle={ImgbasicStyle}
            WrapperClassName="is-passthrough"
          />
        </CommunityBtnWrapper>
        <FlowerWrapeer>
          <ImgBlur
            imgName="faqflower"
            customStyle={ImgbasicStyle}
            WrapperClassName="is-passthrough"
          />
        </FlowerWrapeer>
        <BookWrapeer>
          <ImgBlur
            imgName="alienbook"
            customStyle={ImgbasicStyle}
            WrapperClassName="is-passthrough"
          />
        </BookWrapeer>
        <QusetionOutterWrapper pose={this.state.isOpen ? 'open' : 'closed'}>
          <QusetionItemsWrapper />
          <QusetionItemsWrapper />
          <QusetionItemsWrapper />
          <QusetionItemsWrapper />
          <QusetionItemsWrapper />
        </QusetionOutterWrapper>
      </FAQWrapper>
    )
  }
}

export default FAQ
