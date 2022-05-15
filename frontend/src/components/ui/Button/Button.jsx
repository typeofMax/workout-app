//@Styles
import styles from './Button.module.scss';

const Button = ({ text, callback, viewStyle = 'purple', ...props}) => {

    return (
      <button onClick={callback} className={styles[viewStyle]} {...props}>
        {text}
      </button>
    );
};

export default Button;