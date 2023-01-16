import styles from '../styles/carousel.module.css';

function Carrousel({ pictures }) {
    return (
        <div className={styles.container}>
            {
                pictures.map((picture, index) =>
                    <img src={picture} alt="le logement" key={index} />
                )
            }
        </div>
    );
}

export default Carrousel;