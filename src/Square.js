import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Square extends Component {

    handleClick = (e) => {
        console.log("id", e.target.id);
        this.props.method(e.target.id)

    }


  render() {

        let { turn } = this.props
        let content
        let { status } = this.props
          if(status === 0) {
            content = "?"
        } else if (status === 1) {
              content = <img src = "/images/tree1.jpeg"/>
          } else if (status == 2) {
              content = <img src = "/images/treasure.jpeg"/>
          }

    return (

            <div className='displayBox'  id = {this.props.id}  onClick={this.handleClick}>
                {content}
            </div>
        
    );
  }
}

export default Square;
