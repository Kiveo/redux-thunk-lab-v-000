import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions';
import {CatList} from './CatList';
import { connect } from 'react-redux';

class App extends Component {   
  
  handleClick = (event) => {
    event.preventDefault();
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={event => this.handleClick(event)}>CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}
 
function mapStateToProps(state){
  return {cats: state.cats}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)