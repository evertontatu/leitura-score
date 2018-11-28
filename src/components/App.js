import React, { Component } from 'react';
import '../App.css';
import 'materialize-css/dist/css/materialize.min.css';
import '../styles/index.sass';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Leitura</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="sass.html">Home</a></li>
            </ul>
          </div>
        </nav>

        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>Choose your option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Materialize Select</label>
        </div>

      
      </div>
    );
  }
}

export default App;
