import styles from './registerForm.module.css'
import { Tooltip } from '../../../navi/tooltip'

export const RegisterForm1 = () => {
    return(
        <fieldset>
            <legend>Einnahmen (Optional)</legend>
            <label className={styles.loginLabel} htmlFor="password">Haupteinnahme<Tooltip /></label>
            <input type="number" id="gehalt" className={styles.loginInput}/>
            <label className={styles.loginLabel} htmlFor="password">Nebeneinkünfte</label>
            <input type="password" id="password" className={styles.loginInput}/>
            <label className={styles.loginLabel} htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.loginInput}/>
            <label className={styles.loginLabel} htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.loginInput}/>
            <label className={styles.loginLabel} htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.loginInput}/>
        </fieldset>
    )
}