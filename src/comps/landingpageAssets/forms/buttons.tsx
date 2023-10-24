import { IProps } from '../../reusables/propsLogic'
import styles from './buttons.module.css'

export const Buttons = ({login, setLogin}: IProps) => {
    return(
        <div className={login ? styles.btnContainer : styles.btnContainerReg}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.loginBtn} onClick={() => setLogin(!login)}>Signup</button>
        </div>
    )
}