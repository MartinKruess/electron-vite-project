import { NavLink } from 'react-router-dom'
import styles from './navi.module.css'

export const Navi = () => {
    return(
        <nav className={styles.naviContainer}>
            <ul className={styles.navbar}>
                <NavLink to="/">Sparfuchs</NavLink>
                {/* <NavLink to="/infos">Hintergrundinfos</NavLink>
                <NavLink to="/kontakt">Kontakt</NavLink> */}
            </ul>
            <ul className={styles.navbar}>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/payments">Zahlungspläne</NavLink>
                <NavLink to="/save">Sparanlagen</NavLink>
                <NavLink to="/checklist">Checkliste</NavLink>
                <NavLink to="/posts">Beiträge</NavLink>
            </ul>
        </nav>
    )
}