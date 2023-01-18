import styles from '../styles/carousel.module.css';
import { useState } from 'react';

function Carrousel({ pictures }) {

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage(currentImage === pictures.length - 1 ? 0 : currentImage + 1)
    const previousImage = () => setCurrentImage(currentImage === 0 ? pictures.length - 1 : currentImage - 1)

    return (
        <div className={styles.carousel}>
            {

                pictures.length > 1 ?
                    <>
                        <button className={`${styles.arrows} ${styles.leftArrow}`} onClick={previousImage}>Image précédente</button>
                        <button className={`${styles.arrows} ${styles.rightArrow}`} onClick={nextImage}>Image suivante</button>
                        <span className={styles.pagination}>{currentImage + 1}/{pictures.length}</span>
                    </>
                    : null
            }
            <div className={styles.container}>
                {
                    pictures.map((picture, index) =>
                        index === 0 ?
                            <img style={{ marginLeft: '-' + currentImage * 100 + '%' }} src={picture} alt="le logement" key={index} />
                            :
                            <img src={picture} alt="le logement" key={index} />
                    )
                }
            </div>
        </div>
    );
}

export default Carrousel;