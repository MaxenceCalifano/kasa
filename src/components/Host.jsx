import styles from '../styles/host.module.css';

function Host({ name, picture }) {
    return (
        <div className={styles.host}>
            <p className={styles.name}>{name}</p>
            <img className={styles.image} src={picture} alt={`Portrait de l'hôte ${name}`}></img>
        </div>
    );
}

export default Host;