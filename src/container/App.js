import React from 'react';
import './App.css';
import {robots } from '../robots';
import CardList from '../components/Cardlist';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            robots: robots
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        // event.target.value
    }
    
    render() {
        const filteredRobots = this.state.robots.filter((item)  => {
          return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div  className='App'>
                <h1>Robo Friends Zone</h1>
                <div className='pa2'>
                <input 
                type='text'
                 placeholder='Search A Friend'
                 onChange={ this.onSearchChange}
                 />
            </div>
            <CardList robots={ filteredRobots} />
            </div>
        );
    }
}

export default App;