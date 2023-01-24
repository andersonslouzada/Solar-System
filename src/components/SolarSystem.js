import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline={ text } />
      </div>
    );
  }
}

export default SolarSystem;

SolarSystem.propTypes = {
  text: PropTypes.string.isRequired,
};
