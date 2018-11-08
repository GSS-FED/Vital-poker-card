import React from 'react'
import styled, { css } from 'styled-components'
import posed from 'react-pose'
import ImgBlur from './QueryImgBlur'

const button_setting = {
  hoverable: true,
  pressable: true,
  init: { scale: 1 },
  hover: { scale: 1.1 },
  press: { scale: 0.95 },
}

const posed_button = posed.button(button_setting)

//

const ButtonWrapper = styled(posed_button).attrs({
  value: props => props.text,
})`
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  z-index: 10;
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  border: none;
  font-size: inherit;
  &:hover {
    outline: 0;
    border: none;
  }
  &:active {
    outline: 0;
    border: none;
  }
  &:focus {
    outline: 0;
    border: none;
  }
  &:before {
    position: relative;
    width: 100%;
    height: 100%;
    content: attr(value);
    font-size: inherit;
    z-index: 3;
  }
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #373737;
    ${props => props.backgroungSetting};
    z-index: 2;
  }
  z-index: 10;
  ${props => props.theme.fontfamilyLight};
  ${props => props.customStyle};
  font-weight: 300;
`
const ShadowWrapper = styled.div`
  position: absolute;
  top: -10%;
  left: 0%;
  z-index: 1;
  width: 100%;
`
const buttonReset = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
`

const ImgbasicStyle = {
  witdh: '250%',
}
const Button = props => {
  return (
    <ButtonWrapper
      text={props.btnText}
      customStyle={props.customStyle}
      backgroungSetting={props.backgroungSetting}
    >
      <ShadowWrapper>
        <ImgBlur
          imgName="button-shadow"
          customStyle={ImgbasicStyle}
          WrapperClassName=""
        />
      </ShadowWrapper>
    </ButtonWrapper>
  )
}

export default Button
