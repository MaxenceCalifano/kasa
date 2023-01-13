import { useState, useEffect } from "react";
import { ReactComponent as Chevron } from '../assets/chevron.svg';
import styles from '../styles/dropdown.module.css'

function Dropdown({ title, text, open }) {

    const [isOpen, setIsOpen] = useState(open)
    const [pStyles, setPStyles] = useState(isOpen ? styles.open : styles.close)
    const [textHidden, setTextHidden] = useState(isOpen ? { display: 'block' } : { display: 'none' })

    useEffect(() => {
        if (isOpen) setPStyles(styles.open)
        if (!isOpen) setPStyles(styles.close)
    }, [isOpen])

    return (
        <div>
            <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <Chevron className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} />
            </div>

            <p className={pStyles} onTransitionEnd={() => setTextHidden(isOpen ? { display: 'block' } : { display: 'none' })} style={textHidden}>
                {text}
            </p>

        </div>
    );
}

export default Dropdown;