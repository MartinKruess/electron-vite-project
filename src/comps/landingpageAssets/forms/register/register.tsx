import styles from './register.module.css'
import { IProps } from '../../../reusables/propsLogic'
import { Buttons } from '../buttons'
import { RegisterForm1 } from './registerForm1'
import { RegisterForm2 } from './registerForm2'
import { RegisterFormPersonal } from './registerFormPersonal'
import { useEffect, useState } from 'react'

export const Register = ({login, setLogin}: IProps) => {
    const [credits, setCredits] = useState({
        gehalt: 0,
        zusatz: 0,
    })

    useEffect(() => {
        console.log(credits)
    }, [credits])

    return(
        <section className={styles.registerContainer}>
            <form className={styles.registerForm}>
                <RegisterFormPersonal />
                <RegisterForm1 credits={credits} setCredits={setCredits}/>
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