import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterInp } from './filter.styled';

export default class Filter extends Component {
  render() {
    return (
      <FilterInp
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="search"
      />
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
