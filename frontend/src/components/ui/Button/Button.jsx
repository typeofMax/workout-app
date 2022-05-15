//@Styles
import styles from './Button.module.scss';

const Button = ({ text, viewStyle = 'purple', ...props}) => {

    return (
      <button className={styles[viewStyle]} {...props}>
        {text}
      </button>
    );
};

export default Button;