import { Text } from '../propsLogic'
import styles from './tooltip.module.css'

export const Tooltip = ({text}: Text) => {
  return(
    <div className={styles.hoverText}> ?
      <span className={styles.tooltipText}>{text}</span>
    </div>
  )
}