import styles from "../styles/home.module.css"

function Home() {
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.overlay}>
                    <p>Chez vous, partout et ailleurs</p>
                </div>
                <div className={styles.backgroundImage}></div>
            </div>
        </div>
    );
}

export default Home;