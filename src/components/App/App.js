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

  handleChangeFor = (event, propertyName) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature,
        [propertyName]: event.target.value,
      }
    });
  }

  handleClick = () => {
    this.setState({
      creatureList: [...this.state.creatureList, this.state.newCreature],
      // clears out form fields: value={} must be defined on input
      newCreature: {
        name: '',
        origin: '',
      }
    });
  }

  render() {
    return (
      <main>
        <h1>Mythical Creatures of the World</h1>

        <h2>Add a Creature</h2>
        <div>
          <input
            value={this.state.newCreature.name}
            placeholder="name"
            onChange={(event) => this.handleChangeFor(event, 'name')}
          />
          <input
            value={this.state.newCreature.origin}
            placeholder="origin"
            onChange={(event) => this.handleChangeFor(event, 'origin')}
          />
          <button onClick={this.handleClick}>Add Creature</button>
        </div>

        {/* output of inputs above */}

        <p>
          The {this.state.newCreature.name} originated in {this.state.newCreature.origin}.
        </p>

        <h2>Creature List</h2>
        <ul>
          {this.state.creatureList.map((creature, index) => (
            <li key={index}>{creature.name} originated in {creature.origin}</li>)
          )}
        </ul>
      </main>
    );
  }
}

export default App;
