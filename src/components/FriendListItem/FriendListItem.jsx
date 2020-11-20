import PropTypes from 'prop-types';
import React from 'react';
import './FriendListItem.scss';

const FriendListItem = (props) => {

    const {name, avatar, isOnline} = props;

    return (
        <>
            {isOnline ? <span className="statusOn"></span> : <span className="statusOff"></span>}
            <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
        </>
    )

}

FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool
};

export default FriendListItem;