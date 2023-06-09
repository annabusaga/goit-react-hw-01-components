import Profile from 'components/Profile/Profile';
import user from 'data/user.json';
import data from 'data/data.json';
import Statistics from './Statistics/Statistics';
import transactions from 'data/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import FriendList from './FriendList/FriendList';
import friends from 'data/friends.json';
export const App = () => {
  console.log(friends);
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
