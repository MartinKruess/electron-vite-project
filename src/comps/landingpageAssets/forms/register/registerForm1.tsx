import styles from './registerForm.module.css'
import { formData } from '../../../reusables/formData'
import { Input } from '../../../reusables/inputs'
import { Credits } from '../../../reusables/propsLogic'

export const RegisterForm1 = ({credits, setCredits}: Credits) => {

    const calcSum = (e) => {
        console.log("TypeOf", typeof e)
        setCredits({...credits, [e.target.name]: e.target.value })
    }

    const sum = Number(credits.gehalt) + Number(credits.zusatz)

    return(
        <fieldset onChange={(e) => calcSum(e)}>
            <legend>Einnahmen (Optional)</legend>
            {formData.map((data, i) => <Input key={i} data={data} />)}
            <label className={styles.sum}>Gesamt Einnahmen: {sum}€</label>
        </fieldset>
    )
}