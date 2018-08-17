import React, { createRef, forwardRef } from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgBlur'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'

const FAQWrapper = styled.div`
  margin-top: 10%;
  height: 100vh;
  width: 100vw;
  /* Rectangle 11 Copy: */
  background-image: linear-gradient(225deg, #f3f3f3 0%, #e7e7e7 100%);
`
const FAQText = styled.div`
  font-size: 7vw;
`
class FAQ extends React.Component {
  state = {
    isNumberRun: false,
  }
  componentDidMount() {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 'onEnter' },
    })
  }
  render() {
    return <FAQWrapper />
  }
}

export default FAQ
