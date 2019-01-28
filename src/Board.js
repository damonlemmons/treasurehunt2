import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square.js'
import Header from './Header.js'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            spaces: [0,0,0,0,0,0,0,0,0],
            treasure: 0,
            counter: 0,
            message: "Keep Going!"
        }
    }

componentDidMount = () =>{
    this.resetTreasure()

}

resetTreasure = () => {
    let { spaces, treasure, message } = this.state
    treasure = Math.floor(Math.random()* 9)
    this.setState({treasure: treasure, space: spaces})
}

resetButton = () => {

    this.setState({
        spaces: [0,0,0,0,0,0,0,0,0],
        treasure: 0,
        counter: 0,
        message: "Keep Going!"
    })
    this.resetTreasure()
}

update = (id) => {

    let { spaces, counter, message, treasure } = this.state
    console.log("treasure", treasure);

    if(counter <= 4){
        counter++
        if (id == treasure) {
            spaces[id] = 2
            } else {
            spaces[id] = 1
            }
        }

    //     console.log("type of treasure", typeof treasure);
    // console.log("type of id", typeof spaces[id]);
    // console.log("board", spaces);
    this.setState({counter, spaces, treasure, message})
    console.log("treasure", treasure);
    console.log("spaces", spaces);
    }




  render() {
      let { counter, message, spaces } = this.state


      let square = spaces.map((value, index) => {
            return (
          <Square id = {index} method={this.update} status={value}  />
            )
      })

    return (

        <main>
            <Header message = {this.state.message} turn={counter}/>

        <section className='container'>
            {square}
            <button onClick={this.resetButton} >RESET</button>
        </section>

        </main>

    );
  }
}

export default Board;
