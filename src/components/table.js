import * as React from 'react'
import { styled } from '@mui/material/styles'
import styles from '@/styles/components/Table.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'

const CustomTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontWeight: 700
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}))

const CustomTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}))

function createData(id, name, position, skill, date, status) {
    return {id, name, position, skill, date, status}
}

const dummyData = [
    createData(1, 'Riana', 'Mobile Developer', 'Level 1', '5/10/2022', 'Dalam review'),
    createData(2, 'Riana', 'Mobile Developer', 'Level 2', '6/10/2022', 'Diterima'),
    createData(3, 'Riana', 'Mobile Developer', 'Level 2', '6/10/2022', 'Dalam review'),
    createData(4, 'Riana', 'Mobile Developer', 'Level 1', '8/10/2022', 'Diterima'),
    createData(5, 'Riana', 'Mobile Developer', 'Level 2', '9/10/2022', 'Dalam review'),
]

export default function CustomTable() {
    return(<>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <CustomTableCell className={styles.column}>No</CustomTableCell>
                        <CustomTableCell className={styles.column}>Nama Pelamar</CustomTableCell>
                        <CustomTableCell className={styles.column}>Posisi</CustomTableCell>
                        <CustomTableCell className={styles.column}>Keahlian</CustomTableCell>
                        <CustomTableCell className={styles.column}>Tanggal Melamar</CustomTableCell>
                        <CustomTableCell className={styles.column}>Status</CustomTableCell>
                        <CustomTableCell className={styles.column}>Aksi</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dummyData.map((data, index) => (
                        <CustomTableRow key={index}>
                            <CustomTableCell>{index+1}</CustomTableCell>
                            <CustomTableCell>{data.name}</CustomTableCell>
                            <CustomTableCell>{data.position}</CustomTableCell>
                            <CustomTableCell>{data.skill}</CustomTableCell>
                            <CustomTableCell>{data.date}</CustomTableCell>
                            <CustomTableCell>{data.status}</CustomTableCell>
                            <CustomTableCell>
                                <div>
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton>
                                        <VisibilityIcon />
                                    </IconButton>
                                </div>
                            </CustomTableCell>
                        </CustomTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>)
}