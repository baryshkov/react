import React from 'react';
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

export default SearchPanel;
