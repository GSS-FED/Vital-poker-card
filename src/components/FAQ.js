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
  closed: { y: 200, opacity: 0, backgroundColor: '#000000' },
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

const FAQsetting = {
  open: { y: 0, opacity: 1, transition: { duration: 2200 } },
  closed: { y: 100, opacity: 0, delay: 500, transition: { duration: 700 } },
}
const PosedFAQ = posed.div(FAQsetting)

const ComBtnsetting = {
  open: { scale: 1, opacity: 1, delay: 500, transition: { duration: 700 } },
  closed: { scale: 0.8, opacity: 0, delay: 500, transition: { duration: 700 } },
}
const PosedComBtn = posed.div(ComBtnsetting)
/* ------------------------------- */

/* stylecomponent  init  */
const FAQWrapper = styled.div`
  position: relative;

  margin-top: 10%;
  height: 75.78vw;
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
  white-space: nowrap;
`
const HelpYoubg = styled.span`
  position: relative;
  color: transparent;
  padding-left: 1%;
  padding-right: 1%;
  &:after {
    font-size: 3vw;
    content: 'help you';
    position: absolute;
    left: 2%;
    top: 15%;
    color: #000000;
    z-index: 3;
  }
  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 60%;
    width: 100%;
    height: 43%;
    background-image: linear-gradient(202deg, #54c9f8 0%, #645eed 100%);
    z-index: 2;
    transform: translateY(-50%);
  }
`

const QusetionOutterWrapper = styled(QOW)`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 85.26%;
  top: 14.74%;
  overflow: hidden;
`
const QusetionItems = styled(Item)`
  background: #ffffff;
  box-shadow: -12px 22px 18px -15px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  min-height: 10.3%;
  width: 100%;
  margin-bottom: 2%;
  padding: 18px 23px 32px 23px;
  box-sizing: border-box;
  text-align: left;
  font-size: ${(18 / 1280) * 100}vw;
  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`
const CommunityBtnWrapper = styled(PosedComBtn)`
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
const FAQText = styled(PosedFAQ)`
  position: absolute;
  font-size: 10vw;
  ${props => props.theme.fontfamilyBold};
  color: #464545;
  top: 20%;
  left: 7%;
  background-color: transparent;
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
    //console.log(this.state.isOpen)
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
      reverse: false,
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
      <FAQWrapper id="sec4">
        <FAQText pose={this.state.isOpen ? 'open' : 'closed'}>FAQ</FAQText>
        <HCWHPY>
          How can we <HelpYoubg text={'help you'}>help you</HelpYoubg> ?
        </HCWHPY>
        <CommunityBtnWrapper pose={this.state.isOpen ? 'open' : 'closed'}>
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
          <QusetionItems>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </QusetionItems>
          <QusetionItems>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </QusetionItems>
          <QusetionItems>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </QusetionItems>
          <QusetionItems>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true.
          </QusetionItems>
          <QusetionItems>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true.
          </QusetionItems>
          <QusetionItems>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true.
          </QusetionItems>
          <QusetionItems>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true.
          </QusetionItems>
          <QusetionItems>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true.
          </QusetionItems>
          <QusetionItems>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true.
          </QusetionItems>
          <QusetionItems>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true.
          </QusetionItems>
        </QusetionOutterWrapper>
      </FAQWrapper>
    )
  }
}

export default FAQ
