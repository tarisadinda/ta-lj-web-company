import CardStatistic from "@/components/dashboard/card-statistic"
import LayoutMain from "@/components/layouts/main"

export default function Dashboard() {
    return(<>
        <CardStatistic />
    </>)
}

Dashboard.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}
