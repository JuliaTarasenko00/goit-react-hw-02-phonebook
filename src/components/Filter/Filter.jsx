import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterInp, FilterLabel } from './filter.styled';

export default class Filter extends Component {
  render() {
    return (
      <FilterLabel>
        <span>Find contacts by name</span>
        <FilterInp
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="search"
        />
      </FilterLabel>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
