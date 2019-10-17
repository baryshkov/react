import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component {
  state = {
    searchInput: '',
  };

  onInput = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ searchInput: e.target.value },
                  this.props.onSearch(this.state.searchInput));
    setTimeout(console.log, 2*1000, this.state.searchInput)
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
        value={this.state.searchInput}
      />
    );
  }
}

export default SearchPanel;
