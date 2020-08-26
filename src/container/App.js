import React from 'react';
import './App.css';
import {robots } from '../robots';
import SearchBox from '../components/SearchBox/SearchBox'
import CardList from '../components/CardList/Cardlist';
import HomePage from '../components/HomPage/HomePage';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            robots: robots,
            isSignedIn: true
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        // event.target.value
    }

    isSignedIn = (event) => {
        this.setState({isSignedIn: false})
    }
    
    render() {
        const filteredRobots = this.state.robots.filter((item)  => {
          return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div  className='App'>
                <h1>Robo Friends Zone</h1>
                {
                    this.state.isSignedIn ?
                    <HomePage isSignedIn={this.isSignedIn} />: null
                }
                
             <SearchBox onSearchChange={this.onSearchChange} />

             {
                 !filteredRobots.length ?
                 <h2> No results found</h2> : null
             }
            <CardList robots={ filteredRobots} />
            </div>
        );
    }
}

export default App;