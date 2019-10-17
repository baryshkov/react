import React from 'react';

class ItemAddForm extends React.Component {
  state = {
    label: '',
  };

  onLabelChange = e => {
    this.setState({label: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddition(this.state.label);
    this.setState({label: ''});
  };

  render() {
    return (
      <form className="item-add-form d-flex mt-3" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <button
          // onClick={}
          className="btn btn-primary btn-md ml-2 float-right"
        >
          +
        </button>
      </form>
    );
  }
}

export default ItemAddForm;
