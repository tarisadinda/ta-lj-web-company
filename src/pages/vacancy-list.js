import styles from "@/styles/pages/VacancyList.module.scss"
import cn from 'classnames'
import BlueCard from "@/components/blue-card"
import LayoutMain from "@/components/layouts/main"
import CustomIconButton from "@/components/icon-button"
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete';
import CustomTable from "@/components/table"
import { useRouter } from "next/router"

const colNames = [
    {
        id: 'position',
        label: 'Posisi',
        render: (data) => <span>{data.position}</span>
    },
    {
        id: 'category',
        label: 'Kategori',
        render: (data) => <span>{data.category}</span>
    },
    {
        id: 'status',
        label: 'Status',
        render: (data) => <span>{data.status}</span>
    },
    {
        id: 'applicantAccepted',
        label: 'Pelamar Diterima',
        render: (data) => <span>{data.applicantAccepted}</span>
    },
    {
        id: 'entryApplication',
        label: 'Lamaran Masuk',
        render: (data) => <span>{data.entryApplication}</span>
    },
]

const dummyData = [
    {
        id: 1,
        position: 'UI/UX Designer',
        category: 'Teknologi',
        status: 'Buka',
        applicantAccepted: '-',
        entryApplication: '15'
    },
    {
        id: 2,
        position: 'Mobile Developer',
        category: 'Teknologi',
        status: 'Tutup',
        applicantAccepted: '3',
        entryApplication: '12'
    },
]

export default function VacancyList() {
    const router = useRouter()

    const detailBtn = () => {
        console.log('tes')
    }

    const actionBtn = [
        {
            icon: <DeleteIcon />,
            id: 'delete'
        },
        {
            icon: <EditIcon />,
            id: 'edit'
        },
        {
            icon: <VisibilityIcon />,
            id: 'detail',
            function: detailBtn
        },
    ]

    const newJobVacancy = () => {
        router.push('/add-job-vacancy')
    }

    return(<>
        <div className={styles.listCard}>
            <BlueCard className={styles.text}>
                <h2><b>3</b></h2>
                <span>Lowongan dibuka</span>
            </BlueCard>
            <BlueCard className={styles.text}>
                <h2><b>10</b></h2>
                <span>Total lowongan</span>
            </BlueCard>
        </div>
        <div className="mt-4">
            <CustomIconButton 
                icon={<AddIcon />}
                text="Lowongan Baru"
                onClick={newJobVacancy}
                className={cn(styles.addBtn, "btn btn-primary blue")}
            />
            <div className="mt-3">
                <CustomTable 
                    columns={colNames}
                    actionButton={actionBtn}
                    data={dummyData}
                />
            </div>
        </div>
    </>)
}

VacancyList.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}