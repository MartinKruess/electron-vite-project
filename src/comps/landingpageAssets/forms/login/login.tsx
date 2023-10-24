import { IProps } from '../../../reusables/propsLogic'
import { Buttons } from '../buttons'
import styles from './login.module.css'

export const Login = ({login, setLogin}: IProps) => {
    return(
        <section className={styles.loginContainer}>
            <form className={styles.loginForm}>
                <label  className={styles.loginLabel} htmlFor="username">Username</label>
                <input type="text" id="username" className={styles.loginInput}/>
                <label className={styles.loginLabel} htmlFor="password">Password</label>
                <input type="password" id={styles.password} className={styles.loginInput}/>
                <Buttons login={login} setLogin={setLogin} />
            </form>
        </section>
    )
}