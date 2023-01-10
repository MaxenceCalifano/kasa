import styles from '../styles/thumb.module.css';
import { Link } from "react-router-dom";

function Thumb(props) {
    return (
        <Link to={`/accommodation/${props.accomodation.id}`} className={styles.thumb}>
            <img src={props.accomodation.cover} alt="le logement" />
            <p>{props.accomodation.title}</p>
        </Link>
    );
}

export default Thumb;