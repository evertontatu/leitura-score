import React, { Component } from 'react';
import '../App.css';
import {Button, Icon, Card, Row, Col} from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button waves='light'>
          <Icon>thumb_up</Icon>
        </Button>

        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
      </div>
    );
  }
}

export default App;
