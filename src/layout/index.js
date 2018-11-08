import styled, { css } from 'styled-components'

export const desktopStyle = css`
  position: absolute;
  top: ${props => (props.t / props.wh) * 100}%;
  left: ${props => (props.l / 1280) * 100}%;
  width: ${props => (props.w / 1280) * 100}%;
  height: ${props => (props.h / props.wh) * 100}%;
`
export const desktopPositionStyle = css`
  position: absolute;
  top: ${props => (props.t / props.wh) * 100}%;
  left: ${props => (props.l / 1280) * 100}%;
`

export const mobileStyle = css`
  top: ${props => (props.mt / props.mwh) * 100}%;
  left: ${props => (props.ml / 750) * 100}%;
  width: ${props => (props.mw / 750) * 100}%;
  height: ${props => (props.mh / props.mwh) * 100}%;
`
const mobilePositionStyle = css`
  top: ${props => (props.mt / props.mwh) * 100}%;
  left: ${props => (props.ml / 750) * 100}%;
`
const showDsektopStyle = css`
  display: ${props => (props.showDsektop ? 'block' : 'none')};
`
const showMobileStyle = css`
  display: ${props => (props.showMobile ? 'block' : 'none')};
`
export const wrapperStyle = css`
  width: 100vw;
  height: ${props => (props.mh / props.mw) * 100}vw;
`

export const SectionWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: ${props => (props.h ? props.h : '62.5vw')};
  overflow: hidden;
  @media (max-width: 700px) {
    width: 100vw;
    height: 177.86vw;
  }
`

export const Illustration = styled.img`
  ${desktopStyle};
  z-index: 10;
  @media (max-width: 700px) {
    ${mobileStyle};
  }
`

export const SvgWrapper = styled.div`
  ${desktopStyle};
  z-index: ${props => (props.zi ? props.zi : 10)};
  ${showDsektopStyle};
  @media (max-width: 700px) {
    ${mobileStyle};
    ${showMobileStyle};
  }
`
export const BigTitle = styled.div`
  text-align: center;
  ${desktopPositionStyle};
  color: #555555;
  font-size: ${props => (props.fs / 1280) * 100}vw;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 1.2;
  z-index: ${props => (props.zi ? props.zi : 10)};
  @media (max-width: 700px) {
    ${mobilePositionStyle}
    font-size: ${props => (props.mfs / 375) * 100}vw;
  }
`
export const Title = styled.div`
  text-align: center;
  ${desktopPositionStyle};
  font-size: ${props => (props.fs / 1280) * 100}vw;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: 500;
  z-index: 10;
  color: ${props => (props.c ? props.c : '#333333')};
  font-family: 'PingFangTC-Medium', 'PingFang TC', 'Microsoft JhengHei', serif;

  @media (max-width: 700px) {
    ${mobilePositionStyle}
    color: ${props => (props.mc ? props.mc : '#333333')};
    font-size: ${props => (props.mfs / 375) * 100}vw;
  }
`

export const ContentText = styled.div`
  text-align: ${props => (props.ta ? props.ta : 'center')};
  ${desktopPositionStyle};
  z-index: 5;
  color: ${props => (props.c ? props.c : '#555555')};
  font-family: 'PingFangTC-Medium', 'PingFang TC', 'Microsoft JhengHei', serif;
  font-size: ${props => (props.fs / 1280) * 100}vw;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 1.2;
  ${showDsektopStyle}
  @media (max-width: 700px) {
    ${mobilePositionStyle}
    color: ${props => (props.mc ? props.mc : '#555555')};
    font-size: ${props => (props.mfs / 375) * 100}vw;
    ${showMobileStyle}
  }
`
