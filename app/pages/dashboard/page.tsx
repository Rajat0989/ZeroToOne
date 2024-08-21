import DashboardMain from "@/components/dashboard_main/page"
import DashboardSidebar from "@/components/dashboard_sidebar/page"

const Dashboard = () => {
  return (
    <div className="h-screen w-full flex">
      <DashboardSidebar/>
      <DashboardMain/>
    </div>
  )
}

export default Dashboard
