import React from 'react';
import PropTypes from 'prop-types';

class ItemAddForm extends React.Component {
  state = {
    label: '',
  };

  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddition(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    const { label } = this.state;
    return (
      <form className="item-add-form d-flex mt-3" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={label}
        />
        <button type="submit" className="btn btn-primary btn-md ml-2 float-right">
          +
        </button>
      </form>
    );
  }
}

ItemAddForm.propTypes = {
  onAddition: PropTypes.func.isRequired,
};

export default ItemAddForm;
