import React, { Component } from 'react';
import { Box, RangeSelector, Stack, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = { values: [2, 8] }

  render() {
    const { values } = this.state;
    return (
      <SandboxComponent>
        <Stack>
          <Box direction='row' justify='between'>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
              <Box key={value} pad='small' border={false}>
                <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
              </Box>
            ))}
          </Box>
          <RangeSelector
            direction='horizontal'
            invert={false}
            min={0}
            max={9}
            size='full'
            round='small'
            values={values}
            onChange={nextValues => this.setState({ values: nextValues })}
          />
        </Stack>
      </SandboxComponent>
    );
  }
}
