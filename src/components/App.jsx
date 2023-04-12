import css from './Profile/Profile.module.css';
import Profile from 'components/Profile/Profile';
import user from 'data/user.json';
import data from 'data/data.json';
import Statistics from './Statistics/Statistics';
import transactions from 'data/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tagname}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
