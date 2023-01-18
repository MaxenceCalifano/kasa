import { Link, useLocation } from "react-router-dom";
import styles from "../styles/header.module.css"
import Logo from "../assets/logo.jsx"
import { useState, useEffect } from "react";

function Header() {

    let location = useLocation();
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        if (location.pathname === "/") setCurrentPage("home")
        else if (location.pathname === "/about") setCurrentPage("about")
        else setCurrentPage("else")
    }, [location])

    return (
        <div className={styles.header}>
            <Logo color={"#FF6060"} />
            <nav>
                <Link to="/" className={currentPage === "home" ? styles.currentPageLink : ""} >Accueil</Link>
                <Link to="/about" className={currentPage === "about" ? styles.currentPageLink : ""}>A propos</Link>
            </nav>
        </div>
    );
}

export default Header;