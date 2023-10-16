import * as React from 'react'
import { styled } from '@mui/material/styles'
import styles from '@/styles/components/common/Table.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'

const CustomTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
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

export default function CustomTable({columns, data, idKey, editFunc, deleteFunc}) {
    return(<>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <CustomTableCell>No</CustomTableCell>
                        {columns.length > 0 && columns.map((column, index) => (
                            <CustomTableCell key={index}>{column.label}</CustomTableCell>
                        ))}
                        <CustomTableCell>Aksi</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data !== undefined ? 
                        data.map((item, index) => (
                            <CustomTableRow key={index}>
                                <CustomTableCell>{index+1}</CustomTableCell>
                                {columns.map((col, index) => (
                                    <CustomTableCell key={index}>{col.render(item)}</CustomTableCell>
                                ))}
                                <CustomTableCell>
                                    <div className={styles.actions}>
                                        {/* {actionButton !== undefined && actionButton.map((btn, index) => (
                                            <IconButton key={index} onClick={() => btn.function(item.id)}>
                                                {btn.icon}
                                            </IconButton>
                                        ))} */}
                                        {deleteFunc !== undefined && 
                                            <IconButton onClick={() => deleteFunc(item[idKey])}>
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                        {editFunc !== undefined &&
                                            <IconButton onClick={() => editFunc(item[idKey])}>
                                                <EditIcon />
                                            </IconButton>
                                        }
                                    </div>
                                </CustomTableCell>
                            </CustomTableRow>
                        )) :
                        <CustomTableRow>
                            <CustomTableCell align="center" colSpan={10}>Belum ada data tersedia</CustomTableCell>
                        </CustomTableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </>)
}