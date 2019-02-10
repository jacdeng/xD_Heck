import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
  render() {
    return(
      <div className="flex-container">
        <div className="item"> <input type="file"/> </div>
        <div className="item">
          <p>Enter your barcode:</p>
            <input name="barcode" accept="image/*"/>
            <input type="submit"/>
        </div>
        <div className="item"> 3 </div>
        <div className="item"> 4 </div>
      </div>
    )
  }
}


export default Body;
