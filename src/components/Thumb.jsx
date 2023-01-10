import styles from '../styles/thumb.module.css';
import { Link } from "react-router-dom";

function Thumb({ accomodation }) {
    return (
        <Link to={`/accommodation/${accomodation.id}`} className={styles.thumb}>
            <img src={accomodation.cover} alt="le logement" />
            <p>{accomodation.title}</p>
        </Link>
    );
}

export default Thumb;