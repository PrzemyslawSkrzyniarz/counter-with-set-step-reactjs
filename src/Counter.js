import React, {Component} from 'react';

// import './App.css';
import './Counter.css';

// import Header from "./Header";
import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {
  constructor(props) {
    super(props);

    let initValue = 0;

    if (!isNaN(this.props.initValue)) {
      initValue = parseInt(this.props.initValue);
    }
    this.state = {
      counterValue: initValue
    }
  }

  changeValue = () => {
    this.setState((prevState) => {
      return ({
        counterValue: prevState.counterValue + 1
      })
    });
  }

  resetCounter = (resetCounter) => {
    let initValue = 0;
    if (!resetCounter) {
      if (!isNaN(this.props.initValue)) {
        initValue = parseInt(this.props.initValue);
      }
    }
    this.setState({counterValue: initValue})
  }

  render() {

    // console.log("Co jest w counterValue:" + this.state.counterValue);

    return (
      <div className="counter">
        {/* <Header/> */}
        
        <span className="value">
          {this.state.counterValue}
        </span>
        <ButtonsPanel
          changeCounterValue={this.changeValue}
          resetCounterValue={this.resetCounter}/>
      </div>
    );
  }
}

export default Counter;