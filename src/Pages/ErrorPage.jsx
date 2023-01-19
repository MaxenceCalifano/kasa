import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer"
import styles from "../styles/errorPage.module.css";

function ErrorPage() {
    return (
        <div className={styles.errorPage}>
            <Header />
            <main>
                <p className={styles.title} >404</p>
                <p className={styles.message}>Oups! La page que vous demandez n'existe pas.</p>
                <Link className={styles.homelink} to="/" >Retourner sur la page d’accueil</Link>
            </main>

            <Footer />
        </div>
    );
}

export default ErrorPage;