import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

//1. create method that when called, sets state that was passed down 
  //as props from Matrix
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }

  render() {
  //2. onClick return the method we created here
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}