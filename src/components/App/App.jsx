import Profile from "../Profile";
import Statistic from "../Statistic";
import user from '../../data/user.json';
import statistic from '../../data/statistic.json';

const App = () => {
    
    const {name, tag, location, avatar, stats} = user;

    return (
        <>
            <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
            <Statistic stat={statistic} title />
        </>
    )
};

export default App;