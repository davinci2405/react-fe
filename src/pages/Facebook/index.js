import Feed from "../../components/Feed/Feed"
import { Header } from "../../components/Headers/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import Widgets from "../../components/Widgets/Widgets"

export const Facebook = () => {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      {/* Header */}
      <header>
        <Header />
      </header>

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}
