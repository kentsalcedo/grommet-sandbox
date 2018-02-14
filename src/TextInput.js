import React, { Component } from 'react';

import { Box, TextInput } from 'grommet';

export default class extends Component {
  state = { text: '' }

  render() {
    const { text } = this.state;
    return (
      <Box pad='large' align='center'>
        <TextInput
          value={text}
          onChange={event => this.setState({ text: event.target.value })}
        />
      </Box>
    );
  }
}
