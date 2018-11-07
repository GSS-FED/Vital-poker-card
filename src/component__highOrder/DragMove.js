import React, { forwardRef, createRef } from 'react'
import ReactDOM from 'react-dom'

export default function withDragDrop(Component) {
  const name = Component.displayName || Component.name
  forwardRef.displayName = `withDragDrop(${name})`
  let xVelocity = 0
  let rotation = 0
  let MousePosition = { x: 0, y: 0 }
  let CardPosition = {
    x: 0,
    y: 0,
  }
  let firstMousePosition = {
    x: 0,
    y: 0,
  }

  return class extends React.Component {
    state = {
      mouseX: undefined,
      mouseY: undefined,
      rotate: 0,
      mouseCount: 0,
      isDraging: false,
      zIndex: 2,
    }

    thatRef = createRef()
    // this.props.children(this.state)

    componentDidMount() {
      console.log(this.ref, Component, 'yoyoyoyoyoyoyo', this.ref.refs)
      this.ref.refs.addEventListener('mousedown', this.handleMouseDown)
      this.ref.refs.addEventListener('mouseup', this.handleMouseUp)
      this.ref.refs.addEventListener('touchstart', this.handleMouseDown)
      this.ref.refs.addEventListener('touchend', this.handleMouseUp)
      this.update()
    }

    componentWillUnmount() {
      this.ref.refs.removeEventListener('mousedown', this.handleMouseDown)
      this.ref.refs.removeEventListener('mouseup', this.handleMouseUp)
      this.ref.refs.removeEventListener('touchstart', this.handleMouseDown)
      this.ref.refs.removeEventListener('touchend', this.handleMouseUp)
    }

    handleClick = e => {
      const finalcount = this.state.mouseCount + 1
      console.log(finalcount)
      this.setState({ mouseCount: finalcount })
    }
    handleMouse = e => {
      // console.log(e.clientX, e.clientY)
      MousePosition.x = e.clientX
      MousePosition.y = e.clientY
      this.setState({
        mouseX: e.clientX - this.ref.refs.offsetLeft - firstMousePosition.x,
        mouseY: e.clientY - this.ref.refs.offsetTop - firstMousePosition.y,
      })
    }
    handleMouseDown = e => {
      e.preventDefault()
      console.log('card mousedown!')
      if (this.state.mouseX === undefined) {
        firstMousePosition.x = e.clientX - this.ref.refs.offsetLeft
        firstMousePosition.y = e.clientY - this.ref.refs.offsetTop
      } else {
        firstMousePosition.x =
          e.clientX - this.ref.refs.offsetLeft - this.state.mouseX
        firstMousePosition.y =
          e.clientY - this.ref.refs.offsetTop - this.state.mouseY
      }
      console.log(
        firstMousePosition,
        this.ref.refs.offsetLeft,
        this.ref.refs.offsetTop
      )
      this.setState({ isDraging: true, zIndex: 100 })
      console.log(e)
      if (e.type === 'mousedown')
        document.addEventListener('mousemove', this.handleMouse)
      else if (e.type === 'touchstart')
        document.addEventListener('touchmove', this.handleMouse)
    }
    handleMouseUp = e => {
      console.log('card mouseup!')
      firstMousePosition.x = 0
      firstMousePosition.y = 0
      if (e.type === 'mousedown')
        document.removeEventListener('mousemove', this.handleMouse)
      else if (e.type === 'touchend')
        document.removeEventListener('touchmove', this.handleMouse)
      this.setState({ isDraging: false, zIndex: 2 })
    }

    sigmoid = x => {
      return x / (1 + Math.abs(x))
    }
    update = () => {
      xVelocity = MousePosition.x - CardPosition.x

      CardPosition.x = MousePosition.x
      CardPosition.y = MousePosition.y

      rotation = rotation * 0.9 + this.sigmoid(xVelocity) * 3

      if (Math.abs(rotation) < 0.01) rotation = 0

      if (this.state.isDraging) this.setState({ rotate: rotation })

      requestAnimationFrame(this.update)
    }

    render() {
      const mouseX = this.state.mouseX
      const mouseY = this.state.mouseY
      const rotate = this.state.rotate
      const mouseCount = this.state.mouseCount
      const zIndex = this.state.zIndex
      const { ...rest } = this.props
      return (
        <Component
          ref={ref => (this.ref = ref)}
          onClick={this.handleClick}
          mouseY={mouseY}
          mouseX={mouseX}
          rotate={rotate}
          mouseCount={mouseCount}
          zIndex={zIndex}
          {...rest}
        />
      )
    }
  }
}

/**
 * const Button = ({ primary }) => <div primary>button</div>
 *
 * Button.props = ...
 *
 * export default withDragMove(Button);
 */
