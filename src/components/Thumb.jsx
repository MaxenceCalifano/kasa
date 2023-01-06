import styles from '../styles/thumb.module.css';

function Thumb(props) {
    return (
        <div className={styles.thumb}>
            <p>{props.accomodation.title}</p>
            <img src={props.accomodation.cover} alt="le logement" />
        </div>
    );
}

export default Thumb;