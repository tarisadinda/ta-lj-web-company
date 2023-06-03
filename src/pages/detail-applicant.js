import styles from '@/styles/DetailApplicant.module.scss'
import cn from 'classnames'
import BlueCard from "@/components/blue-card"
import LayoutMain from "@/components/layouts/main"
import Avatar from '@mui/material/Avatar'

export default function DetailApplicant() {
    return(<>
    <div className={styles.row}>
        <div>
            <h4><b>Informasi Pelamar</b></h4>
            <BlueCard className={styles.applicantInfo}>
                <div className={styles.wrapper}>
                    <Avatar sx={{width: 100, height: 100}} />
                    <div className={styles.textWrap}>
                        <p>Budi Pranowo</p>
                        <p><b>Mobile developer - Level 2</b></p>
                        <p>budi@gmail.com</p>
                        <p>085300422156</p>
                    </div>
                </div>
                <div className={styles.btnSection}>
                    <button className='btn btn-primary blue'>CV - Budi Pranowo</button>
                    <button className='btn btn-primary blue'>Sertifikat Junior Mobile Developer</button>
                </div>
            </BlueCard>
        </div>
        <div>
            <h4><b>Status Lamaran</b></h4>

        </div>
    </div>
    <div className='mt-5'>
        <h4><b>Informasi Posisi</b></h4>
        <p className={cn(styles.date, 'mb-2')}>Tanggal melamar: 5/10/2022</p>
        <BlueCard className={styles.positionInfo}>
            <p><b>Mobile developer </b></p>
            <p><b>Level 2</b></p>
            <p>Teknologi</p>
            <p>Fulltime - WFO</p>
        </BlueCard>
    </div>
    </>)
}

DetailApplicant.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}
