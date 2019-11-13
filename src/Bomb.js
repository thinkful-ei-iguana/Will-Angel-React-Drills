import React, { Component } from 'react';

class Bomb extends Component {
  state = {
    count: 0,
  }


  componentDidMount() { 
    this.interval = setInterval(() => {
      this.setState({
        count : this.state.count + 1  
      })
    },1000)  
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderCount() {
    const { count } = this.state
    if (count >= 8){
      clearInterval(this.interval);
      return "BOOM!";
    } else if (count % 2 === 0){
      return "Tick";
    } else {
      return "Tock";
    }
  } 



  render () {
    return (
      <div> {this.renderCount()} </div>
    )
  }
}

export default Bomb;