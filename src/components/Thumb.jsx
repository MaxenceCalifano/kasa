import styles from '../styles/thumb.module.css';

function Thumb(props) {
    return (
        <div className={styles.thumb}>
            <img src={props.accomodation.cover} alt="le logement" />
            <p>{props.accomodation.title}</p>
        </div>
    );
}

export default Thumb;