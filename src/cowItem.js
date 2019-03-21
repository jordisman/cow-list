import React from 'react';

class CowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    }
  }

  render() {
    return (
      <div
        onClick={() => this.setState({ showDescription: !this.state.showDescription })}
      >

        <li> Cow name: {this.props.cow.name} </li>

          {this.state.showDescription ?
          <div> Description: {this.props.cow.description}
          </div> : null }

      </div >
    );
  }
};

export default CowItem;

