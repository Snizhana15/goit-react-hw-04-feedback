import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      <ul>
        <li className={css.item}>
          Good:<span className={css.number}>{good}</span>
        </li>
        <li className={css.item}>
          Neutral:<span className={css.number}>{neutral}</span>
        </li>
        <li className={css.item}>
          Bad:<span className={css.number}>{bad}</span>
        </li>
        <li className={css.item}>
          Total:<span className={css.number}>{total}</span>
        </li>
        <li className={css.item}>
          Positive feedback:
          <span className={css.number}>{positivePercentage}</span>
        </li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
export default Statistics;
