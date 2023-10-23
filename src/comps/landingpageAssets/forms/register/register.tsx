import styles from './register.module.css'
import { IProps } from '../logionIProps'
import { Buttons } from '../buttons'
import { RegisterForm1 } from './registerForm1'
import { RegisterForm2 } from './registerForm2'
import { RegisterFormPersonal } from './registerFormPersonal'

export const Register = ({login, setLogin}: IProps) => {
    return(
        <section className={styles.registerContainer}>
            <form className={styles.registerForm}>
                <RegisterFormPersonal />
                <RegisterForm1 />
                <RegisterForm2 />
                <div className={styles.registerButtonContainer}>
                    <Buttons login={login} setLogin={setLogin}/>
                </div>
            </form>
        </section>
    )
}