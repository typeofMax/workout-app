//@Styles
import styles from './Counters.module.scss';

const times = {
  minutes: 20,
  level: 'hard',
  up: '5%',
};

const Counters = () => {
  return (
    <div className={styles.wrapper}>
      {Object.entries(times).map((item) => {
        return (
          <div className={styles.item} key={'_id' + item[0]}>
            <h3 className={styles.title}>{item[0]}</h3>
            <div className={styles.value}>{item[1]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Counters;
