import React from 'react'
import styled from 'styled-components'
import Img_Blur from './QueryImgBlur'
import { TimelineMax, TweenMax, Linear } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min'

const LandingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`
const MagicBox = styled.div`
  height: 300px;
  width: 300px;
  background: pink;
  position: relative;
  z-index: 200;
`

const ShadowStyle = {
  width: '80%',
  position: 'absolute',
  left: '-10%',
  top: '0%',
  zIndex: '4',
}

class whatYouCanDo extends React.Component {
  state = {}
  componentDidMount() {
    console.log('componentDidMount')
    // var controller = new ScrollMagic.Controller({
    //   globalSceneOptions: { triggerHook: 'onEnter' },
    // })
    // var tween = TweenMax.to('#magic-tester', 0.5, {
    //   scale: 1.3,
    //   repeat: 5,
    //   yoyo: true,
    // })
    // new ScrollMagic.Scene({
    //   triggerElement: '#shadow-wrapper',
    //   duration: '300',
    //   offset: 1000,
    // })
    //   .setTween(tween)
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller)
  }
  render() {
    return <LandingWrapper />
  }
}

export default whatYouCanDo
