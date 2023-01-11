import styles from '../styles/tag.module.css'

function Tag({ tag }) {
    return (
        <span className={styles.tag}>{tag}</span>
    );
}

export default Tag;