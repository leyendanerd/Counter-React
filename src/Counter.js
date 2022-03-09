import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
      countValue: 0,
      intervalID: ""
    };
  }

  

  render() {
    return (
      <div>
        <div className="form-floating m-3">
          <input
            type="number"
            className="form-control"
            value={this.state.inputValue}
            onChange={(event) => this.getInputValue(event)}
            id="secondsInput"
            placeholder="seconds"
          />
          <label htmlFor="secondsInput">Seconds</label>
        </div>
        <button
          itemID="startButton"
          type="button"
          onClick={() => this.startCounter()}
          className="btn btn-success m-3"
        >
          Start counter
        </button>
        <button
          itemID="StopButton"
          type="button"
          onClick={() => this.stopCounter()}
          className="btn btn-danger m-3"
        >
          Stop counter
        </button>

        <h1>El conteo es igual a {this.state.countValue}</h1>
      </div>
    );
  }

  getInputValue(event) {
    const value = event.target.value;

    this.setState({
      inputValue: value,
    });
  }

 
  startCounter() {
    
    const miliseconds = parseInt(this.state.inputValue) * 1000;
    console.log('Esto son los milisegundos' + miliseconds)

    if (this.state.inputValue !== 0 ){
      const intervalID = setInterval(() => {
        var counterValue = parseInt(this.state.countValue);
        this.setState({
          countValue: counterValue + 1,
        });
      }, miliseconds);
  
      this.setState({
        intervalID: intervalID
      })
    }
    
  }
  
  

  stopCounter(){
    clearInterval(this.state.intervalID);
    this.setState({
      countValue: 0,
    });
  }

}



export default Counter;
