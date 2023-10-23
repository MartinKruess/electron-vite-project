import style from './registerForm.module.css'

export const RegisterFormPersonal = () => {
    return(
        <fieldset>
            <legend>Persönliche Daten</legend>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
            <label htmlFor="mail">E-Mail</label>
            <input type="mail" id="mail"/>
            <legend className={style.radio}>Verwendungszweck
                <div>
                    <label htmlFor="privat">Privat</label>
                    <input type="radio" id="privat" name='usage'/>
                </div>
                <div>
                    <label htmlFor="freelancer">Freelancer</label>
                    <input type="radio" id="freelancer" name='usage'/>
                </div>
            </legend>
            <label className={style.info}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus architecto molestiae nulla minima voluptatum recusandae odio. Fugit, soluta harum! Molestiae aspernatur neque, reiciendis fugiat unde ab ullam? Accusamus, nulla?
            </label>
        </fieldset>
    )
}