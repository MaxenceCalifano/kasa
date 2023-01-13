import { useState } from "react";
import { ReactComponent as Chevron } from '../assets/chevron.svg';
import styles from '../styles/dropdown.module.css'

function Dropdown({ title, text, open }) {

    const [isOpen, setIsOpen] = useState(open)

    return (
        <div>
            <div className={styles.header}>
                <span>{title}</span>
                <Chevron className={styles.chevron} />
            </div>

            <p>
                {text}
            </p>

        </div>
    );
}

export default Dropdown;