//@Libs
import PropTypes from 'prop-types';
//@Styles
import styles from './Button.module.scss';

const Button = ({ text, viewStyle = 'purple', ...props }) => {
  return (
    <button className={styles[viewStyle]} {...props}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  viewStyle: PropTypes.string,
  props: PropTypes.object,
};
