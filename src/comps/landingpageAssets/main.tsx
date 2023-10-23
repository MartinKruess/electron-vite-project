import { useEffect, useState } from 'react'
import styles from './main.module.css'
import { LPMainLeft } from "./mainLeft"
import { LPMainRight } from "./mainRight"
import { Register } from './forms/register/register'

export const LPMain = () => {
    const [login, setLogin] = useState(true)

    useEffect(() => {

    }, [login])

    // const res = fetch('')
    // const data = res.json()
    // oder im Router react-router 6.4

    // const user = {
    //     username: '',
    //     password: '',
    //     mail: '',
    //     tier: '',
    // }

    return(
        <main>
            {login
                ? (
                    <>
                    <LPMainLeft />
                    <LPMainRight login={login} setLogin={setLogin} />
                    </>
                )
                : (
                    <>
                    <Register login={login} setLogin={setLogin} />
                    </>
                )
            }  
        </main>
    )
}