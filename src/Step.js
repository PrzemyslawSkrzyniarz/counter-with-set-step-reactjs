import React, {Component} from 'react';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSteps: {placeholder: ''}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          Wartość kroku:
          <input
            // name="numberOfsteps"
            type="number"
            placeholder="1 - 5"            
            value={this.state.value}
            min="1"
            max="5"
            onChange={this.handleInputChange}/>
        </label>
      </form>
    );
  }
}

export default Steps;
