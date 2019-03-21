import React from 'react';

const Description = (props) => {
  <div>
    <h4>Description:</h4>
    {this.state.showDescription ?
      <div className="cow-description">
        {this.props.cow.description}
      </div> : null}
  </div>
}

export default Description;