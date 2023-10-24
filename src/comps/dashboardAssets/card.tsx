import styles from './card.module.css'
import { AllCards } from "../reusables/propsLogic"

export const Card = ({card}: AllCards) => {
    return (
        <div className={styles.card}>
            <h3>{card.title}</h3>
            <p>Type: {card.type}</p>
            <div>
                <p>Forderung: {card.sum}€</p>
                <p>Rate: {card.rate}€</p>
            </div>
            <div>
                <p>Fällig: {card.start}</p>
                <p>Endet: {card.end}</p>
            </div>
        </div>
    )
}