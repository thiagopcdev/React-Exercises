// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }
  
  renderChars = () => {
    const { characters } = this.state;
    console.log(characters)
    return (
      <div className="body">
        {characters.map(({ name, image }) => {
          return (
            <div className="container" key={name}>
              <h3>{name}</h3>
              <img src={image} alt={name}/>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    const { characters } = this.state;
    const loading = <span>Loading...</span>;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        {/* {this.renderChars} */}
       {characters.length === 0 ? loading : this.renderChars()}
      </div>
    );
  }
}

export default App;