import React from 'react'
import { Avatar, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import styles from '@/styles/components/modals/EditApplicationStatus.module.scss'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { openAlert, setOpenAlert } from 'src/redux/slices/alertSlice'
import CloseIcon from '@mui/icons-material/Close'
import CustomAlert from '../common/custom-alert'

const ModalEditStatus = ({open, handleClose}) => {
    const dispatch = useDispatch()

    const isOpenAlert = useSelector(openAlert)

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
                        <button onClick={handleClose} className='btn btn-ghost blue'>Batal</button>
                        <button onClick={() => { dispatch(setOpenAlert(true)); handleClose() }} className='btn btn-primary blue'>Update</button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
        <CustomAlert 
            open={isOpenAlert} 
            onClose={() => dispatch(setOpenAlert(false))}
            duration={2500}
            text='Tesss..'
        />
    </>)
}

export default ModalEditStatus