import React, { Component } from 'react';

class RouletteGun extends Component{
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick= () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);
      
      this.setState({
        chamber: randomChamber,
        spinningTheChamber:false,
      })
    }, 2000)
  }





  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Pull the Trigger </button>
      </div>
    )
  }


}

export default RouletteGun;