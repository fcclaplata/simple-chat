// @flow
import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'
import Subheader from 'react-md/lib/Subheaders'
import Avatar from 'react-md/lib/Avatars'
import FontIcon from 'react-md/lib/FontIcons';
import rootRef from '../../lib/db.js'

class RoomList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rooms: {}
        }
    }

    componentDidMount(){
        rootRef.child('rooms').on('value', snap => this.setState({ rooms: snap.val() }))
    }

    showRooms = () => _.map(this.state.rooms, (room, key)=>(
        <Link key={key} to={`/${key}`}>
            <ListItem
                primaryText={room.title}
                leftAvatar={<Avatar icon={<FontIcon>group</FontIcon>} />} 
            />
        </Link>
    ))

    render = () => (
        <List>
            <Subheader primaryText="Rooms" primary />
            { this.showRooms() }
        </List>
    )

}

export default RoomList