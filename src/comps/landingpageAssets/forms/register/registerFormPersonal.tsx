import styles from './registerForm.module.css'

export const RegisterFormPersonal = () => {
    return(
        <fieldset>
            <legend>Persönliche Daten</legend>
            <label htmlFor="username" className={styles.loginLabel}>Username</label>
            <input type="text" id="username"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
            <label htmlFor="mail">E-Mail</label>
            <input type="mail" id="mail"/>
            <legend className={styles.radio}>Verwendungszweck
                <div className={styles.radioBtnBox}>
                    <label htmlFor="privat">Privat</label>
                    <input type="radio" id="privat" name='usage'/>
                </div>
                <div>
                    <label htmlFor="freelancer">Freelancer</label>
                    <input type="radio" id="freelancer" name='usage'/>
                </div>
            </legend>
        </fieldset>
    )
}