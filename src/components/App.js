import React, { Component } from 'react'
import '../App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import '../styles/index.sass'
import BoxPost from './posts/BoxPost'
import { getCategoriesAPI } from '../utils/api'


class App extends Component {

  state = {
    post: null
  }

  componentDidMount(){
    const { store } = this.props

    this.props.loadPosts()

    store.subscribe(() => {
      this.setState(() => {
        post: store.getState()
      })
    })
  }


  componentDidMount(){
    M.AutoInit();
  }

  render() {

    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="#" class="brand-logo">Leitura</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="#">Home</a></li>
            </ul>
          </div>
        </nav>

        <div className="container section">
          <div className="row">
            <div className="col s6">
              <div className="input-field">
                <select ref="dropdown" defaultValue="1">
                  <option value="" disabled>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <label>Filtro Score</label>
              </div>
            </div>
            <div className="col s6">
              <div className="input-field">
                <select ref="dropdown" defaultValue="5">
                  <option value="" disabled>Choose your option</option>
                  <option value="6">Option 6</option>
                  <option value="7">Option 7</option>
                  <option value="8">Option 8</option>
                </select>
                <label>Categorias</label>   
              </div> 
            </div>
          </div>
        </div>

        <div className="container section">
          <div className="row">
            <div className="s12">
              <div class="container-box-post">

                <BoxPost/>
                
              </div>
            </div>
          </div>
        </div>

        

      
      </div>
    );
  }
}

export default App;
