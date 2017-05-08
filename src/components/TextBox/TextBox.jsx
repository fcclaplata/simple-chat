import React from "react"
import TextField from 'react-md/lib/TextFields'
import db from '../../lib/db'
import "./TextBox.scss"

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  updateText = (text) => {
      this.setState({text})
  }

  onKeyDown = (e) => {
    if( !e.shiftKey && e.key === 'Enter' ){
      db
        .child('messages')
        .child(this.props.room)
        .push({ from: 'matias', text: this.state.text }).then( snap => this.setState({ text: '' }) ).catch( e => console.error(e))
    }
  }

  render() {
    return <TextField onKeyDown={this.onKeyDown} value={this.state.text} onChange={this.updateText} placeholder="Write your message" />
  }
}

export default TextBox