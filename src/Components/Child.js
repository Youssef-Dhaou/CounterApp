import React, { Component } from 'react'

export default class Child extends Component {

  componentWillUnmount(){
    alert("The component is removed")
  }
  render() {
    return (

      <div>
        <h1> Child Component</h1>
      </div>

    )
  }
}
