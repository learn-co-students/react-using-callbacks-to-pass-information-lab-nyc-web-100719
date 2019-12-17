import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  //create method to change state value that's in constuctor
        //updates selectedColor w/ whatev argument's passed in
  setSelectedColor = (newColor) => {
      this.setState({
        selectedColor: newColor
      })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} 
  //genRow() returns every cell, so pass in selectedColor as prop 
       //for each cell created
      selectedColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    //pass down setSelectedColor method as a prop to ColorSelector
        //(since ColorSelector controls the updating of colors)
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}