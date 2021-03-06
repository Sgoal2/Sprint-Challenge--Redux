import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { fetchSmurfs } from "../actions";

class App extends Component {
  componentDidMount() {
    
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.name}>{smurf.name}, {smurf.height}, {smurf.age}</li>;
              
            })}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
    
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);

