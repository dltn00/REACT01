import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
  render() {
    return (
      <div>{count}</div>
    )
  }
}