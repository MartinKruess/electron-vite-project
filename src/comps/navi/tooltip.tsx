import styles from './tooltip.module.css'

export const Tooltip = () => {
  return(
    <div className={styles.hoverText}> ?
      <span className={styles.tooltipText}>Lohn, Gehalt, Bürgergeld</span>
    </div>
  )
}