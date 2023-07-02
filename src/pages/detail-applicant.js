import React, { useState } from 'react'
import styles from '@/styles/DetailApplicant.module.scss'
import cn from 'classnames'
import BlueCard from "@/components/blue-card"
import LayoutMain from "@/components/layouts/main"
import { Avatar, Dialog, DialogTitle, IconButton } from '@mui/material'
import { CustomChip } from '@/components/chip'
import CustomIconButton from '@/components/icon-button'
import CloseIcon from '@mui/icons-material/Close'

const ModalEditStatus = () => {
    const [openModal, setOpenModal] = useState(true)
    const handleClose = () => {
        setOpenModal(!openModal)
    }

    return(<>
        <Dialog 
            open={openModal}
            handleClose={handleClose}
            PaperProps={{
                sx: {
                    width: '574px',
                    height: '500px',
                    borderRadius: '7px'
                }
            }}
        >
            <DialogTitle className={styles.title}>
                Edit Status Lamaran
                <IconButton 
                    onClick={handleClose}
                    className={styles.close}
                    sx={{
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
        </Dialog>
    </>)
}
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
            <div className={styles.editStatus}>
                <h4 className='mb-0'><b>Status Lamaran</b></h4>
                <CustomIconButton />
            </div>
            <CustomChip label="Dalam Review" bgColor='#1C55FF' />
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
    <ModalEditStatus />
    </>)
}

DetailApplicant.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}
