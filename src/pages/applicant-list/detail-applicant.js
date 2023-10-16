import React, { useState } from 'react'
import styles from '@/styles/pages/applicant-list/DetailApplicant.module.scss'
import cn from 'classnames'
import BlueCard from "@/components/common/blue-card"
import LayoutMain from "@/components/layouts/main"
import { Avatar, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import { CustomChip } from '@/components/common/chip'
import CustomIconButton from '@/components/common/icon-button'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'

const ModalEditStatus = ({open, handleClose}) => {
    return(<>
        <Dialog 
            open={open}
            handleClose={handleClose}
            PaperProps={{
                sx: {
                    width: '574px',
                    height: 'max-content',
                    borderRadius: '7px'
                }
            }}
        >
            <DialogTitle className={styles.title}>
                <span className={styles.modalTitle}><b>Edit Status Lamaran</b></span>
                <IconButton 
                    onClick={handleClose}
                    sx={{
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <p>Status Seleksi</p>
                <select className="form-select" aria-label="Pilih Status Seleksi">
                    <option selected>Open this select menu</option>
                    <option value="1">Dalam Review</option>
                    <option value="2">Terpilih</option>
                    <option value="3">Tidak Sesuai</option>
                </select>
                <div className='mt-4 d-flex justify-content-end'>
                    <div className={styles.modalBtn}>
                        <button className='btn btn-ghost blue'>Batal</button>
                        <button className='btn btn-primary blue'>Update</button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    </>)
}
export default function DetailApplicant() {
    const [openModalStatus, setOpenModalStatus] = React.useState(false)

    const handleStatusModal = () => {
        setOpenModalStatus(!openModalStatus)
    }

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
                    <button className={cn(styles.btnIcon, 'btn btn-primary blue')}>
                        <InsertDriveFileIcon />
                        CV - Budi Pranowo
                    </button>
                    <button className={cn(styles.btnIcon, 'btn btn-primary blue')}>
                        <InsertDriveFileIcon />
                        Sertifikat Junior Mobile Developer
                    </button>
                </div>
            </BlueCard>
        </div>
        <div>
            <div className={styles.editStatus}>
                <h4 className='mb-0'><b>Status Lamaran</b></h4>
                <CustomIconButton onClick={handleStatusModal} icon={<EditIcon />} text='Ubah Status' />
            </div>
            <CustomChip label="Dalam Review" bgcolor='#F1C93A' />
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
    <ModalEditStatus open={openModalStatus} handleClose={handleStatusModal} />
    </>)
}

DetailApplicant.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}
