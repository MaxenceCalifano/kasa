import styles from "../styles/banner.module.css";

function Banner(props) {
    return (
        <div className={styles.banner} style={{ backgroundImage: props.url }}>
            <p>{props.children}</p>
        </div>
    );
}

export default Banner;