import styles from './overview.module.css'
import { Card } from './card'

export const Overview = () => {
    //Payments / Credits
    const cards = [
        {title: 'Ablösung Auto', sum: 3530, type: 'Ratenzahlung', rate: 30, start: '01.10.2023', end: '01.06.2025'},
        {title: 'Neues Brillengestell', sum: 430, type: 'Ratenzahlung', rate: 30, start: '01.10.2023', end: '01.06.2025'},
        {title: 'Stromrechnung', sum: 270, type: 'Einmalzahlung', rate: 270, start: '01.10.2023', end: '01.06.2025'}
    ]

    return(
        <section>
            <h2>Übersicht</h2>
            <article className={styles.overviewContainer}>
                {cards.map((card) => {
                    return <Card card={card} />
                })}
            </article>
        </section>
    )
}