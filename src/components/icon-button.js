import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { styled } from '@mui/material/styles'

const IconButtonStyled = styled(Button)(() => ({
    border: 'none',
    textTransform: 'capitalize',
    borderRadius: '10px',
    color: '#919293',
    width: 'max-content',
    '&:hover': {
        border: 'none',
        backgroundColor: '#E1E1E1'
    }
}))

export default function CustomIconButton() {
    return(<>
        <IconButtonStyled variant="outlined" startIcon={<EditIcon />}>
            Ubah Status
        </IconButtonStyled>
    </>)
}