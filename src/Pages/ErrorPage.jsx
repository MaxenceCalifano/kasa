import { Link } from "react-router-dom";
import Header from "../components/header";
import styles from "../styles/errorPage.module.css";

function ErrorPage() {
    return (
        <div className={styles.errorPage}>
            <Header />
            <p className={styles.errorPage}>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" >Retourner sur la page d’accueil</Link>

        </div>
    );
}

export default ErrorPage;