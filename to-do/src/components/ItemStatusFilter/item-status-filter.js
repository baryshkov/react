import React from 'react';

class ItemStatusFilter extends React.Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  filter = () => {
    return '';
  };

  render() {
    const { filter, onFilter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button className={`btn ${clazz}`} type="button" key={name} onClick={() => onFilter(name)}>
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

export default ItemStatusFilter;
