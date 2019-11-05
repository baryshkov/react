import React from 'react';
import PropTypes from 'prop-types';
import './search-panel.css';

class SearchPanel extends React.Component {
  onInput = e => {
    this.props.onSearch(e.target.value);
  };

  render() {
    const searchText = 'Type here to search';
    const searchStyle = {
      fontSize: '18px',
    };
    return (
      <input
        className="search-input"
        placeholder={searchText}
        style={searchStyle}
        onChange={this.onInput}
      />
    );
  }
}

SearchPanel.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchPanel;
