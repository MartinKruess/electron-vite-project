import registerSettings from './registerForm.module.css'

export const RegisterForm2 = () => {
    return(
        <fieldset className={registerSettings.field}>
            <legend>Haha</legend>
            <label className={registerSettings.loginLabel} htmlFor="password">Password</label>
            <input type="password" id="password" className={registerSettings.loginInput}/>
            <label className={registerSettings.loginLabel} htmlFor="password">Password</label>
            <input type="password" id="password" className={registerSettings.loginInput}/>
            <label className={registerSettings.loginLabel} htmlFor="password">Password</label>
            <input type="password" id="password" className={registerSettings.loginInput}/>
            <label className={registerSettings.loginLabel} htmlFor="password">Password</label>
            <input type="password" id="password" className={registerSettings.loginInput}/>
            <label className={registerSettings.loginLabel} htmlFor="password">Password</label>
            <input type="password" id="password" className={registerSettings.loginInput}/>
        </fieldset>
    )
}