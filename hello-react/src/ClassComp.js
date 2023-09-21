import React, { Component } from 'react'

export default class ClassComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
        속성1 : 0,
        속성2 : 10
    };
  }
  
  render() {
    return (
      <div>ClassComp</div>
    )
  }
}
