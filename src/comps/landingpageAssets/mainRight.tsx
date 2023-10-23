import { IProps } from './forms/logionIProps'
import { Login } from './forms/login/login'

export const LPMainRight = ({login = false, setLogin}: IProps) => {

    return <Login login={login} setLogin={setLogin}/>
}