import Header from "../components/header";
import { Outlet } from "react-router";
import '../styles/index.css'

function Root() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;