import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';
export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} class="item">
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
