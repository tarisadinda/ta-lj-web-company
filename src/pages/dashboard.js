import CardStatistic from "@/components/dashboard/card-statistic"
import LayoutMain from "@/components/layouts/main"
import CustomTable from "@/components/table"

export default function Dashboard() {
    return(<>
        <div className="d-flex gap-3 mb-5">
            <CardStatistic />
            <CardStatistic />
            <CardStatistic />
        </div>
        <div>
            <CustomTable />
        </div>
    </>)
}

Dashboard.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}
