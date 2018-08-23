import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const button_setting = {
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 },
}

const posed_button = posed.button(button_setting)

//

const ButtonWrapper = styled(posed_button)`
  width: 214px;
  height: 57px;
  background-color: #373737;
  color: white;
`

const Button = props => {
  return <ButtonWrapper>{props.btnText}</ButtonWrapper>
}

export default Button
