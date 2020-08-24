import React, { Component, Fragment } from 'react';
// import SearchBox from './SearchBox';
import './App.css';
import CardList from './Components/CardList/CardList'
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            SearchBox: '',
            robots: robots
        }
    }

    onSearchChange = (event) => {
        event.preventDefault();
        this.setState({ SearchBox: event.target.value })
    }

    render() {
        console.log(this.state.robots);
        const filteredRobots = this.state.robots.filter((item) => {
            return (
                item.name.toLowerCase().includes(this.state.SearchBox.toLowerCase())
            )
        })

        console.log(filteredRobots);

        return (
            <Fragment>
                <div  className='container'>
                <h3>Robo Friends</h3>
                <input type="search" placeholder="Search" onChange={this.onSearchChange} />
                <div className='cards'>
                    <CardList robots={filteredRobots} />
                </div>
                </div>
            </Fragment>
        )
    }
}

export default App;