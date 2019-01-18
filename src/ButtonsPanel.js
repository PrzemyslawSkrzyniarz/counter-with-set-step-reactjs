import React, { Component } from 'react';
import './ButtonsPanel.css';

class ButtonsPanel extends Component {
    resetOrReinitCounter = (reset) => {
        this.props.resetCounterValue(reset);
    }
    render() {
        return (
            <div className="buttons-panel">
                <button onClick={this.props.changeCounterValue}>Add 1</button>
                <button onClick={() => this.resetOrReinitCounter(false)}>ReInit</button>
                <button onClick={() => this.resetOrReinitCounter(true)}>Reset</button>
            </div>
        )
    }
}
export default ButtonsPanel;