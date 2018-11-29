import React, { createRef, forwardRef } from 'react'
import styled from 'styled-components'
import ImgBlur from './QueryImgBlur'
import DragHighOrder from '../component__highOrder/DragMove'
import posed, { tween } from 'react-pose'

const PockerCardDragPlayground = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(254, 223, 237, 0);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: ${props => (props.isCSMaskShow ? '500' : '4')};
`
const PockerCardSelectPlayground = styled.div`
  height: ${props => (props.isCSMaskShow ? '100%' : '0px')};
  width: ${props => (props.isCSMaskShow ? '100%' : '100%')};
  background-color: ${props =>
    props.isCSMaskShow ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
  position: ${props => (props.isCSMaskShow ? 'fixed' : 'absolute')};
  top: 0px;
  left: 0px;
  z-index: ${props => (props.isCSMaskShow ? '400' : '2')};
  transition: 0.45s background-color ease-in-out;
  overflow: ${props => (props.isCSMaskShow ? 'auto' : 'visible')};
`
const cardBase = {
  position: 'absolute',
  zIndex: 2,
}

const cardSelectbasicStyle = {
  width: '9%',
  left: '15%',
  top: '15%',
  ...cardBase,
}
const cardNotSelectbasicStyle = {
  width: '9%',
  left: '0%',
  top: '0%',
  ...cardBase,
  cursor: 'pointer',
  border: '5px solid transparent',
  backgroundColor: 'transparent',
  borderRadius: '13px',
  transition:
    'transform 0.45s cubic-bezier(.07,.08,.01,1),  border 0.25s ease-in-out,background-color 0.25s ease-in-out',
}

const CardNotSelectbasicStyle = component => {
  return styled(component)`
    position: absolute;
    width: 9%;
    left: 0%;
    top: 0%;
    z-index: 2;
    cursor: pointer;
    /* border: 3px solid pink; */
    /* border-radius: 10px; */
  `
}

const CardStyle1 = {
  width: '9%',
  left: '35%',
  top: '55%',
  ...cardBase,
}

const CardStyle2 = {
  width: '9%',
  left: '45%',
  top: '55%',
  ...cardBase,
}

const CardStyle3 = {
  width: '9%',
  left: '55%',
  top: '55%',
  ...cardBase,
}
const CardStyle4 = {
  width: '9%',
  left: '65%',
  top: '55%',
  ...cardBase,
}

const CardStyle5 = {
  width: '9%',
  left: '45%',
  top: '75%',
  ...cardBase,
}
const CardStyle6 = {
  width: '9%',
  left: '55%',
  top: '75%',
  ...cardBase,
}

const CardStyle7 = {
  width: '9%',
  left: '25%',
  top: '75%',
  ...cardBase,
}

const BasicCardStyle = {
  width: '100%',
}
const Wrapper = {
  position: 'absolute',
  width: '9%',
  left: '30%',
  top: '50%',
  zIndex: '4',
}

const allPokerCardSerialNoArray = () => {
  let resaultArray = []
  for (let i = 1; i <= 13; i++) {
    for (let j = 1; j <= 4; j++) {
      let headString = 'poker0'
      if (i >= 10) headString = 'poker'
      resaultArray.push(headString + i + '0' + j)
    }
  }
  return resaultArray
}

class PockerCardWrapper extends React.Component {
  render() {
    let box = {
      transform: `
      translateX(${this.props.mouseX}px) 
      translateY(${this.props.mouseY}px) 
      rotate(${this.props.rotate}deg)`,
      transformOrigin: '50% 50%',
    }
    const StyleMerged = {
      ...this.props.customStyle,
      ...box,
      zIndex: this.props.zIndex,
    }
    return (
      <div
        style={StyleMerged}
        ref={ref => {
          this.refs = ref
        }}
      >
        <ImgBlur
          imgName={this.props.imgName}
          customStyle={BasicCardStyle}
          WrapperClassName=""
        />
        {this.props.isShadow && (
          <ImgBlur
            imgName={'pocker-shadow'}
            customStyle={BasicCardStyle}
            WrapperClassName="is-shadow"
          />
        )}
      </div>
    )
  }
}

const DragCard = DragHighOrder(PockerCardWrapper)

class PockerCardLayer extends React.Component {
  state = {
    isCSMaskShow: false,
    cardOriginSelected: [
      'poker0303',
      'poker0403',
      'poker0503',
      'poker0601',
      'poker0701',
      'poker0904',
      'poker1004',
    ],
    cardSelected: [],
    cardNotSelected: allPokerCardSerialNoArray(),
    wrapperWidth: 0,
    wrapperHeight: 0,
  }
  componentDidMount() {
    //console.log(allPokerCardSerialNoArray())
    //console.log(this.ref, '/?????')
    this.setState({
      wrapperWidth: this.pokerCardWrapper.offsetWidth,
      wrapperHeight: this.pokerCardWrapper.offsetHeight,
    })
  }
  cardWrapperClick = () => {
    if (this.state.isCSMaskShow) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    }
    this.setState({
      isCSMaskShow: !this.state.isCSMaskShow,
      wrapperWidth: this.pokerCardWrapper.offsetWidth,
      wrapperHeight: this.pokerCardWrapper.offsetHeight,
    })
  }
  cardSelectClick = (CardSerialNo, e) => {
    //console.log(CardSerialNo, e)
    if (this.state.isCSMaskShow) {
      e.stopPropagation()
      const targetIndex = this.state.cardSelected.findIndex(d => {
        return d === CardSerialNo
      })
      //console.log(targetIndex)
      if (targetIndex === -1) {
        this.setState({
          cardSelected: [...this.state.cardSelected, ...CardSerialNo],
        })
      } else {
        const mutatedstate = this.state.cardSelected
        mutatedstate.splice(targetIndex, 1)
        this.setState({ cardSelected: mutatedstate })
      }
      //console.log(this.state.cardSelected, '!!!!!!!!!!!!')
    } else {
    }
  }
  render() {
    return (
      <>
        <PockerCardDragPlayground
          ref={ref => {
            this.pokerCardWrapper = ref
          }}
          isCSMaskShow={this.state.isCSMaskShow}
        >
          <PockerCardSelectPlayground
            onClick={this.cardWrapperClick}
            isCSMaskShow={this.state.isCSMaskShow}
          >
            {this.state.cardNotSelected.map((d, index) => {
              let transformStyle = {}
              let selectedStyle = {}
              if (this.state.isCSMaskShow) {
                transformStyle = {
                  transform: `
                    translateX(${this.state.wrapperWidth * 0.06 +
                      this.state.wrapperWidth * (((index % 8) * 11) / 100)}px) 
                    translateY(${this.state.wrapperHeight * 0.1 +
                      this.state.wrapperHeight *
                        ((parseInt(index / 8) * 22) / 100)}px) 
                        rotateZ(0deg) `,
                }
                if (
                  this.state.cardSelected.findIndex(selectedItem => {
                    return selectedItem === d
                  }) !== -1
                )
                  selectedStyle = {
                    border: '5px solid #81E0FD',
                    backgroundColor: '#81E0FD',
                  }
              } else {
                transformStyle = {
                  transform: `
                    translateX(${this.state.wrapperWidth * 0}px) 
                    translateY(${this.state.wrapperHeight * 0.64124}px) 
                    rotateZ(20deg) `,
                }
              }

              const eachCardStyle = {
                ...cardNotSelectbasicStyle,
                ...transformStyle,
                ...selectedStyle,
              }
              return (
                <div
                  style={eachCardStyle}
                  onClick={e => {
                    this.cardSelectClick(d, e)
                  }}
                  key={'pokerNotSelectedCard' + index}
                >
                  <ImgBlur
                    imgName={d}
                    customStyle={BasicCardStyle}
                    WrapperClassName=""
                  />
                </div>
              )
            })}
          </PockerCardSelectPlayground>
          {this.state.cardSelected.map((d, index) => {
            const eachLeft = 15 + index * 2 + '%'

            const eachCardStyle = { ...cardSelectbasicStyle, left: eachLeft }
            //console.log(eachCardStyle)
            return (
              <DragCard
                imgName={d}
                key={'pcokerCardSelected' + index}
                customStyle={eachCardStyle}
              />
            )
          })}
          <DragCard
            imgName="poker0503"
            isShadow={true}
            customStyle={CardStyle1}
          />
          <DragCard
            imgName="poker0403"
            isShadow={true}
            customStyle={CardStyle2}
          />
          <DragCard
            imgName="poker0601"
            isShadow={true}
            customStyle={CardStyle3}
          />
          <DragCard
            imgName="poker0701"
            isShadow={true}
            customStyle={CardStyle4}
          />
          <DragCard
            imgName="poker0904"
            isShadow={true}
            customStyle={CardStyle5}
          />
          <DragCard
            imgName="poker1004"
            isShadow={true}
            customStyle={CardStyle6}
          />
          <DragCard
            imgName="poker0303"
            isShadow={true}
            customStyle={CardStyle7}
          />
        </PockerCardDragPlayground>
      </>
    )
  }
}

export default PockerCardLayer
