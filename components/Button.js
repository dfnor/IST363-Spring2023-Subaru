import classnames from 'classnames/bind';
import styles from './button.module.scss';

let cx = classnames.bind(styles);

const Button = ({
    clickHandler, 
    label="Default", 
    type="secondary" 
}) => {
    let buttonClasses = cx({
        btn: true,
        primary: type === "primary",  // === means check if 
        secondary: type === "secondary"
    });
    return <button onClick={clickHandler} className={buttonClasses}>{label}</button>
}
export default Button