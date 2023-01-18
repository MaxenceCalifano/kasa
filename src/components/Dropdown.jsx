import { useState, useRef, useEffect } from "react";
import { ReactComponent as Chevron } from '../assets/chevron.svg';
import styles from '../styles/dropdown.module.css'

function Dropdown({ title, text, open }) {

    const hiddable = useRef(null)
    const [isOpen, setIsOpen] = useState(open)

    useEffect(() => {
        isOpen ? hiddable.current.style.display = "block" : hiddable.current.style.display = "none"
    }, [])

    const toggle = () => {
        //It's open and gonna close
        if (isOpen) hiddable.current.setAttribute('animationClose', '')

        //It's closed and gonna open
        if (!isOpen) {
            hiddable.current.style.display = "block"
            hiddable.current.setAttribute('animationOpen', '')
        }
        setIsOpen(!isOpen)
    }

    const removeTransitionAttribute = () => {
        if (isOpen) {
            hiddable.current.removeAttribute('animationOpen')
        }
        if (!isOpen) {
            hiddable.current.removeAttribute('animationClose')
            hiddable.current.style.display = "none"
        }
    }

    //Display, or a list or a paragraph
    const textContent = typeof text === 'string'
        ? <p className={styles.textContent} onAnimationEnd={removeTransitionAttribute} ref={hiddable}>{text}</p>
        : <ul className={styles.textContent} onAnimationEnd={removeTransitionAttribute} ref={hiddable}>{text.map((element, index) => <li key={index}>{element}</li>)}</ul>


    return (
        <div className={styles.dropdown}>
            <div className={styles.header} onClick={toggle}>
                <span>{title}</span>
                <Chevron className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} />
            </div>

            {textContent}
        </div>
    );
}

export default Dropdown;