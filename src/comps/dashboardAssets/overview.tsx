import styles from './overview.module.css'
import { Card } from './card'

export const Overview = () => {
    //Payments / Credits
    const cards = [
        {title: 'Ablösung Auto', type: 'Ratenzahlung', sum: 3530,  rate: 30, start: '01.10.2023', end: '01.06.2025'},
        {title: 'Neues Brillengestell',type: 'Ratenzahlung', sum: 430,  rate: 30, start: '01.10.2023', end: '01.06.2025'},
        {title: 'Stromrechnung', type: 'Einmalzahlung', sum: 270,  rate: 270, start: '01.10.2023', end: '01.06.2025'}
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