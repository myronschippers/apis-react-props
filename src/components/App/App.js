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
    const displayCreatures = this.state.creatureList.map((creature, index) => {
      return <li key={index}>{creature.name} originated in {creature.origin}</li>
    });

    return (
      <div>
        <header className="appHd">
          <h1>Mythical Creatures of the World</h1>
        </header>
        <main className="wrapper">
          <div className="panel panel_connectedTop">
            <h2 className="panel-hdg">Add a Creature</h2>

            <input
              className="field"
              value={this.state.newCreature.name}
              placeholder="name"
              onChange={(event) => this.handleChangeFor(event, 'name')}
            />
            <input
              className="field"
              value={this.state.newCreature.origin}
              placeholder="origin"
              onChange={(event) => this.handleChangeFor(event, 'origin')}
            />
            <button className="btn" onClick={this.handleClick}>Add Creature</button>

            {/* output of inputs above */}
            <p className="panel-bottomMsg">
              The {this.state.newCreature.name} originated in {this.state.newCreature.origin}.
            </p>
          </div>

          <div className="panel">
            <h2 className="panel-hdg">Creature List</h2>

            <ul>
              {displayCreatures}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
