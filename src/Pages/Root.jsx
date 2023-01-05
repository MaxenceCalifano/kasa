import Header from "../components/header";
import { Outlet } from "react-router";

function Root() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;