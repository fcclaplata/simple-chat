// @flow
import React from 'react'
import _ from 'lodash'
import rootRef from '../../lib/db.js'
import Toolbar from 'react-md/lib/Toolbars'
import Paper from 'react-md/lib/Papers'
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Avatar from 'react-md/lib/Avatars';

import TextBox from '../TextBox/TextBox'
import Message from '../Message/Message'

import styles from './Room.scss'


class Room extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            room: {
                title: ""
            },
            members: {},
            messages: {}
        }
        this.listeners = []
    }

   componentWillReceiveProps(nextProps){
        this.listeners.forEach(listener => listener.off())
        let roomsRef = rootRef
            .child('rooms')
            .child(nextProps.match.params.room)
        let membersRef = rootRef
            .child('members')
            .child(nextProps.match.params.room)
        let messagesRef = rootRef
            .child('messages')
            .child(nextProps.match.params.room)
        
        roomsRef.on('value', snap => this.setState({
                room: snap.val()
            }))
        membersRef.on('value', snap => this.setState({
                members: snap.val()
            }))
        messagesRef.on('value', snap => this.setState({
                messages: snap.val()
            }))
        this.listeners=[roomsRef, membersRef, messagesRef]
   }

    render() {
        const showMessages = () => _.map(this.state.messages, (message, key) => (
            <Message key={key} message={message} />
        ))
        return (
            <room style={styles.room}>
                <Toolbar colored title={ this.state.room.title } />
                <messages> { showMessages() } </messages>
                <footer><TextBox room={this.props.match.params.room} /></footer>
            </room>
    )
   }
}

export default Room