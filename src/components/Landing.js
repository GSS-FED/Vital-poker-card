import React from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgBlur'
import PockerLayer from './PockerCardLayer'

const LandingWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 1;
`
const MagicBox = styled.div`
  height: 300px;
  width: 300px;
  background: pink;
  position: relative;
  z-index: 200;
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

class Landing extends React.Component {
  state = {}
  componentDidMount() {}
  render() {
    return (
      <LandingWrapper>
        <ImgBlur
          imgName="header"
          customStyle={HeaderStyle}
          WrapperClassName="is-passthrough"
        />
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
        {/* <MagicBox id="magic-tester" WrapperClassName="is-passthrough" /> */}
      </LandingWrapper>
    )
  }
}

export default Landing
