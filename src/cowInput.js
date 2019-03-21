import React from 'react';
import axios from 'axios';

const NewCow = (props) => (

  <div>
  {console.log('props in input =', props)}
    <h3>Add New Cow</h3>
    <form>
      <label> Name:
        <input
          type="text"
          name="name"
          value={props.value}
          onChange={props.handleNameChange} />
      </label>
      <label> Description:
        <input
          type="text"
          name="description"
          value={props.value}
          onChange={props.handleDesChange} />
      </label>
        <input
          type="submit"
          onSubmit={props.handleSubmit} />
    </form>
  </div>

)

export default NewCow;