import Header from "../components/header";
import { Outlet } from "react-router";
import '../styles/index.css'
import Footer from "../components/Footer";

function Root() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;