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
      <div>
        <header className="appHd">
          <h1>Mythical Creatures of the World</h1>
        </header>
        <main className="wrapper">
          <div className="panel panel_connectedTop">
            <h2 className="panel-hdg">Add a Creature</h2>
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
            
            <p className="panel-bottomMsg">
              The {this.state.newCreature.name} originated in {this.state.newCreature.origin}.
            </p>
          </div>

          {/* output of inputs above */}


          <div className="panel">
            <h2 className="panel-hdg">Creature List</h2>
            <ul>
              {this.state.creatureList.map((creature, index) => (
                <li key={index}>{creature.name} originated in {creature.origin}</li>)
              )}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
