import GuildSidebar from "../components/GuildSidebar";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const { user } = useAuth();

    return (
        <div>
            < GuildSidebar />
            <h4>{`Welcome back, ${user.displayName}`}</h4>
        </div>
    );
}

export default Dashboard;