import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component {
    constructor() {
        super();
        // state what describes the app. It can change and affect our apps. only the app can change the State. This is the main parent CardList and SearchBox are the children - Smart Component
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        // fetching the api response and getting the user and updating teh state with the new users.
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return response.json();})
            .then(users => {this.setState({ robots: users})})
       
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value })
    }

    render () {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?
            <h1>Loading...</h1>:
            (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    {/* this is an example of a state that will be changable by the Searchbox child. onSearchChange function will be called from the SearchBox component and will update the searchfield state*/}
                    <SearchBox searchChange= {this.onSearchChange}/>
                    {/* the now changed state via the filteredRobots const will be available as a prop for the CardList child */}
                    <Scroll>
                        <CardList robots= {filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
}

export default App;