//@Libs
import cn from 'classnames';
import PropTypes  from 'prop-types';
//@Styles
import styles from './Alert.module.scss';

const Alert = ({type = 'success', text}) => {
  return (
    <div
      className={cn(styles.wrapper,
        { [styles.success]: type === 'success' },
        { [styles.error]: type === 'error' },
        { [styles.info]: type === 'info' },
        { [styles.warning]: type === 'warning' }
      )}
    >
      <h3 className={styles.heading}>{text}</h3>
    </div>
  );
}

export default Alert

Alert.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
}