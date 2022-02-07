/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistic';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from "./data/transactions.json"



function App() {
  return (
    <div css={{ backgroundColor: 'rgb(232, 231, 227)' }} className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
