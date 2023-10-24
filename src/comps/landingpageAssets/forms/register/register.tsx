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
                <label className={styles.info}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus architecto molestiae nulla minima voluptatum recusandae odio. Fugit, soluta harum! Molestiae aspernatur neque, reiciendis fugiat unde ab ullam? Accusamus, nulla?
                </label>
                <div className={styles.registerButtonContainer}>
                    <Buttons login={login} setLogin={setLogin}/>
                </div>
            </form>
        </section>
    )
}