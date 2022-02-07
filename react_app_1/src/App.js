import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistic';
import user from './data/user.json';
import data from "./data/data.json"

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;
