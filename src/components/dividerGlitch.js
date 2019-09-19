import React from 'react'

class DividerGlitch extends React.Component {
  constructor(props) {
    super(props)

    this.maxLength = 500
    this.chars = ['█', '▓▓▓▓▓▓▓▓▓', '▒', '░', '▒', '▓', '░', '▓', '▒']

    this.state = { line: this.generateLine() }
  }

  randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  generateLine() {
    let line = ''

    for (let i = 0; i <= this.maxLength; i++) {
      line += this.chars[this.randomInt(this.chars.length)]
    }

    return line
  }

  render() {
    const { line } = this.state
    const { updateOnScroll } = this.props

    if (window !== 'undefined' && updateOnScroll) {
      window.onscroll = e => {
        this.setState({ line: this.generateLine() })
      }
    }

    return <div className='divider-glitch'>{line}</div>
  }
}

export default DividerGlitch

// export default () => {
//   const maxLength = 500
//   const chars = ['█', '▓▓▓▓▓▓▓▓▓', '/', '░', '▒', '▓', '░', '▓', '▒']
//   let line = ''

//   for (let i = 0; i <= maxLength; i++) {
//     line += chars[randomInt(chars.length)]
//   }

//   if (window !== 'undefined') {
//     window.onscroll = e => {
//       console.log(e)
//     }
//   }

//   return <div className='divider-glitch'>{line}</div>
// }

// function randomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max))
// }
