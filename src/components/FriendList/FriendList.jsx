import PropTypes from 'prop-types';
import React from 'react';
import './FriendList.scss';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = (props) => {
    
    const {friends} = props;

    return (

        <ul className="friend-list">

            {

                friends.map((friend) => (<li className="item" key={friend.id}><FriendListItem name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} key={friend.id} /></li>))

            }

        </ul>
        
    );

};

FriendList.propTypes = {
    friends: PropTypes.array
};

export default FriendList;