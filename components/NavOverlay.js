import styles from './navoverlay.module.css';
import Button from './Button'

const NavOverlay = ({closeHandler}) => {
    return <div className={styles.navoverlay}>
        <Button 
            label="Close"
            clickHandler={closeHandler}
        />
        Nav overlay goes here.
    </div>
}
export default NavOverlay