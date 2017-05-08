// @flow
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Toolbar from 'react-md/lib/Toolbars'
import Paper from 'react-md/lib/Papers'
import RoomList from '../RoomList/RoomList'
import Room from '../Room/Room'
import Home from '../Home/Home'
import styles from './App.scss'


const App = () => (
    <Router>
        <app style={styles}>
            <Paper zDepth={1} id="sidebar"> 
                <Toolbar colored title="Chat" />
                <RoomList />
            </Paper>
            <main>
                <Route exact path="/" component={Home}/>
                <Route path="/:room" component={Room}/>
            </main>
        </app>
    </Router>
)

export default App