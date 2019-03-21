import React from 'react';
import axios from 'axios';
import CowList from './cowlist';
import CowInput from './cowInput';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      name: '',
      description: ''
    }
    console.log('newCow:', this.state.newCow);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDesChange = this.handleDesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get('http://localhost:3000/api/cows')
    .then(res => {
      this.setState({cows: res.data});
      console.log('axios.get-res.data:', res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleNameChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  }

  handleDesChange(e) {
    e.preventDefault();
    this.setState({
      description: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let allCows = this.state.cows;
    let newCow = {
      name: this.state.name,
      description: this.state.description
    }
    // let newCow = this.state.newCow;
    console.log('newCow', this.state.newCow);

    axios.post('http://localhost:3000/api/cows', newCow)
      .then(res => {
        console.log('axios.post-res.data:', res.data);
        allCows.push(this.state.newCow)
      })
    // if (this.state.newCow.length > 0) {
    //   allCows.push(newCow);
    // }
    this.setState({
      cows: allCows,
      newCow: newCow
    });
  }

  render() {
    return (
      <div>
        <h1>Cow-List</h1>
        <CowInput

          cows={this.state.cows}
          handleNameChange={this.handleNameChange}
          handleDesChange={this.handleDesChange}
          handleSubmit={this.handleSubmit}
        />
        <CowList
          cows={this.state.cows}
        />

      </div>
    )
  }
}

export default App;