import './admin.css'
import { BodySection } from './BodySection'
import { Sidebar } from './SidebarSection'



const Admin = () => {
    return (
        <div className="container">
            <Sidebar />
            <BodySection />
        </div>
    )
}
export default Admin