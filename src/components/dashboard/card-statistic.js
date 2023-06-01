import styles from '@/styles/components/dashboard/CardStatistic.module.scss'
import cn from 'classnames'

export default function CardStatistic() {
    return(<>
        <div className={cn(styles.wrapper, 'card')}>
            <h1 className='m-0'><b>12</b></h1>
            <p className={cn(styles.labelCount, 'm-0')}>Pelamar baru untuk direview</p>
        </div>
    </>)
}