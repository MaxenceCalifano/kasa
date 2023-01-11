import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Tag from "../components/Tag";

import styles from '../styles/accommodation.module.css';

function Accommodation() {
    //Get accommodation id the url
    let { id } = useParams();

    const [accommodation, setAccommodation] = useState(null);

    useEffect(() => {
        fetch('../logements.json')
            .then(response => response.json())
            .then(res => setAccommodation(res.find(elem => elem.id === id)))
    }, [id])

    if (!accommodation) return null

    return (
        <div>
            <p className={styles.title} >{accommodation.title}</p>
            <p className={styles.location} >{accommodation.location}</p>
            <div className={styles.tags}>
                {accommodation.tags.map((tag, key) => (
                    <Tag key={key} tag={tag} />
                ))}
            </div>

        </div>
    );
}

export default Accommodation;