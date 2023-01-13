import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";

import styles from '../styles/accommodation.module.css';

function Accommodation() {
    //Get accommodation id the url
    let { id } = useParams();

    const [accommodation, setAccommodation] = useState(null);
    console.log("🚀 ~ file: Accommodation.jsx:13 ~ Accommodation ~ accommodation", accommodation)

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
            <Dropdown title={"Description"} text={accommodation.description} open={true} />
        </div>
    );
}

export default Accommodation;