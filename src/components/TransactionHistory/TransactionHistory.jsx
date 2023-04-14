import css from './TransactionHistory.module.css';
import { PropTypes } from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead className={css.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }, index) => {
            return (
              <tr
                className={css.row}
                style={{ backgroundColor: index % 2 ? 'white' : 'lightpink' }}
                key={id}
              >
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
