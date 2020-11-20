import React from 'react';
import Profile from "../Profile";
import Statistic from "../Statistic";
import FriendList from "../FriendList";
import Transactions from "../Transactions";
import user from '../../data/user.json';
import statistic from '../../data/statistic.json';
import friendsArr from '../../data/friends.json';
import transactions from '../../data/transactions.json';


const App = () => {
    
    const {name, tag, location, avatar, stats} = user;

    return (
        <>
            <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
            <Statistic stat={statistic} title="Upload Stats" />
            <FriendList friends={friendsArr} />
            <Transactions trans={transactions} />
        </>
    )
};

export default App;