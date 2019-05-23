import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5")
      .then(results => results.json())
      .then(data => {
          let pictures = data.results.map((pic)=>{
            return (
              <div key={ pic.results }>
              <img src={pic.picture.medium} />
              </div>
            )
          })
      this.setState({ pictures: pictures });
      console.log(this.state.pictures);
      })
  }

  render() {
    return (
      <div>
        {this.state.pictures}
        <p>
          Start editing to see some magic happen
        </p>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
