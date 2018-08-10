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

  return class extends React.Component {
    state = { mouseX: undefined, mouseY: undefined, rotate: 0, mouseCount: 0 }

    thatRef = createRef()

    componentDidMount() {
      console.log(this.ref, Component, 'yoyoyoyoyoyoyo', this.ref.refs)
      this.ref.refs.addEventListener('mousedown', this.handleMouseDown)
      this.ref.refs.addEventListener('mouseup', this.handleMouseUp)
      this.update()
    }

    componentWillUnmount() {
      this.ref.refs.removeEventListener('mousedown', this.handleMouseDown)
      this.ref.refs.removeEventListener('mouseup', this.handleMouseUp)
    }

    handleClick = e => {
      const finalcount = this.state.mouseCount + 1
      console.log(finalcount)
      this.setState({ mouseCount: finalcount })
    }
    handleMouse = e => {
      console.log(e.clientX, e.clientY)
      MousePosition.x = e.clientX
      MousePosition.y = e.clientY
      this.setState({ mouseX: e.clientX, mouseY: e.clientY })
    }
    handleMouseDown = e => {
      e.preventDefault()
      console.log('card mousedown!')
      document.addEventListener('mousemove', this.handleMouse)
    }
    handleMouseUp = e => {
      console.log('card mouseup!')
      document.removeEventListener('mousemove', this.handleMouse)
    }

    sigmoid = x => {
      return x / (1 + Math.abs(x))
    }
    update = () => {
      xVelocity = MousePosition.x - CardPosition.x

      CardPosition.x = MousePosition.x
      CardPosition.y = MousePosition.y

      rotation = rotation * 0.9 + this.sigmoid(xVelocity) * 1

      if (Math.abs(rotation) < 0.01) rotation = 0

      this.setState({ rotate: rotation })

      requestAnimationFrame(this.update)
    }

    render() {
      const mouseX = this.state.mouseX
      const mouseY = this.state.mouseY
      const rotate = this.state.rotate
      const mouseCount = this.state.mouseCount
      const { ...rest } = this.props
      return (
        <Component
          ref={ref => (this.ref = ref)}
          onClick={this.handleClick}
          mouseY={mouseY}
          mouseX={mouseX}
          rotate={rotate}
          mouseCount={mouseCount}
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
