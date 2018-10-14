import React from 'react';
import Switch from '@material-ui/core/Switch';

class SwitchLabels extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
        <div class ="myMan">
        <label>
            Chef mode
        </label>
        <Switch
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
        </div>
    );
  }
}

export default SwitchLabels;