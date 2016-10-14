import React, { Component } from 'react';
import { NumberInput } from 'react-desktop/macOs';

export default class extends Component {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <NumberInput
        label="My Number"
        placeholder="My Number"
        defaultValue=""
        onChange={this.handleChange}
      />
    );
  }
}
