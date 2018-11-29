import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const positionCenter = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`
const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
`
const LoadingText = styled.div`
  ${positionCenter};
  width: 100%;
  height: 100px;
  line-height: 100px;
  span {
    display: inline-block;
    margin: 0 5px;
    color: #fff;
    font-family: 'Quattrocento Sans', sans-serif;
  }
  ${createCSS}
`

const blurKeyframe = keyframes`
	0% {filter: blur(0px);}
	100% {filter: blur(4px);}
`

function createCSS() {
  let styles = ''

  for (let i = 0; i < 8; i += 1) {
    styles += `
      span:nth-child(${i + 1}) {
          filter: blur(0px);
          animation: blur-text 1.5s ${i / 5}s
              infinite linear alternate;
          }
     `
  }

  return css`
    ${styles}
  `
}

export default function Loading() {
  return (
    <LoadingWrapper>
      <LoadingText>
        <span class="loading-text-words">圖</span>
        <span class="loading-text-words">片</span>
        <span class="loading-text-words">上</span>
        <span class="loading-text-words">傳</span>
        <span class="loading-text-words">中</span>
        <span class="loading-text-words">.</span>
        <span class="loading-text-words">.</span>
        <span class="loading-text-words">.</span>
      </LoadingText>
    </LoadingWrapper>
  )
}
