import CountingCard from "@/components/dashboard/counting-card"
import LayoutMain from "@/components/layouts/main"
import CustomTable from "@/components/common/table"
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import { useRouter } from "next/router"

const colNames = [
    {
        id: 'name',
        label: 'Nama Pelamar',
        render: (data) => <span>{data.name}</span>
    },
    {
        id: 'position',
        label: 'Posisi',
        render: (data) => <span>{data.position}</span>
    },
    {
        id: 'skill',
        label: 'Keahlian',
        render: (data) => <span>{data.skill}</span>
    },
    {
        id: 'date',
        label: 'Tgl Melamar',
        render: (data) => <span>{data.date}</span>
    },
    {
        id: 'status',
        label: 'Status',
        render: (data) => <span>{data.status}</span>
    },
]

const dummyData = [
    {
        id: 1,
        name: 'Carissa Febrianti',
        position: 'Mobile Developer',
        skill: 'Level 1',
        date: '27/09/2022',
        status: 'Dalam review'
    },
    {
        id: 2,
        name: 'Budi Pranowo',
        position: 'Web Developer',
        skill: 'Level 2',
        date: '27/09/2022',
        status: 'Dalam review'
    },
]

export default function ApplicantList() {
    const router = useRouter()

    const detailData = (id) => {
        router.push('/applicant-list/detail-applicant')
    }

    const deleteData = (id) => {
        // console.log(id)
    }

    return(<>
        <div className="d-flex gap-3 mb-5">
            <CountingCard total='12' title='Pelamar baru untuk direview' />
            <CountingCard total='4' title='Pelamar dalam tahap seleksi' />
            <CountingCard total='2' title='Pelamar yang direach' />
        </div>
        <div>
            <CustomTable 
                columns={colNames}
                data={dummyData}
                idKey='id'
                detailFunc={detailData}
                deleteFunc={deleteData}
            />
        </div>
    </>)
}

ApplicantList.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}
