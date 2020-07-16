import React, { Component } from 'react';
import './App.css'

class App extends Component {
  state = {
    newCreature: {
      name: '',
      origin: '',
    },
    creatureList: [
      { name: 'Unicorn', origin: 'Europe' },
      { name: 'Sphinx', origin: 'Persia' },
      { name: 'Dryad', origin: 'Greece' },
      { name: 'Kappa', origin: 'Japan' },
      { name: 'Jackalope', origin: 'America' },
    ],
  };

  // bound to name input field
  handleNameChange = (event) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature,
        name: event.target.value,
      }
    });
  }

  // bound to origin input field
  handleOriginChange = (event) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature,
        origin: event.target.value,
      }
    });
  }

  // handleChangeFor = (event, propertyName) => {
  //   this.setState({
  //     newCreature: {
  //       ...this.state.newCreature,
  //       [propertyName]: event.target.value,
  //     }
  //   });
  // }

  handleClick = () => {
    this.setState({
      creatureList: [...this.state.creatureList, this.state.newCreature],      
    });    
  }

  render() {
    return (
      <main>
        <h1>Mythical Creatures of the World</h1>

        <h2>Add a Creature</h2>
        <input placeholder="name" onChange={this.handleNameChange} />
        <input placeholder="origin" onChange={this.handleOriginChange} />
        <button onClick={this.handleClick}>Add Creature</button>

        {/* output of inputs above */}

        <p>
          The {this.state.newCreature.name} originated in {this.state.newCreature.origin}.
        </p>

        <h2>Creature List</h2>
        <ul>
          {this.state.creatureList.map(creature => (
            <li>{creature.name} originated in {creature.origin}</li>)
          )}
        </ul>
        <pre>
          {/* {JSON.stringify(this.state, null, 2)} */}
        </pre>
      </main>
    );
  }
}

export default App;
