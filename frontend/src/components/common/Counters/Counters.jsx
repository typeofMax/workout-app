//@Styles
import PropTypes from 'prop-types';
import styles from './Counters.module.scss';

const Counters = ({ minutes, workouts, kgs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <h3 className={styles.title}>Minutes</h3>
        <div className={styles.value}>{minutes}</div>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>Workouts</h3>
        <div className={styles.value}>{workouts}</div>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>Kgs</h3>
        <div className={styles.value}>{kgs}</div>
      </div>
    </div>
  );
};

export default Counters;

Counters.propTypes = {
  minutes: PropTypes.number,
  workouts: PropTypes.number,
  kgs: PropTypes.number,
};