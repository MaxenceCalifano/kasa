import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import Rate from "../components/Rate";
import Host from "../components/Host";

import styles from '../styles/accommodation.module.css';

function Accommodation() {
    //Get accommodation id the url
    let { id } = useParams();
    const navigate = useNavigate();

    const [accommodation, setAccommodation] = useState(null);
    //console.log("🚀 ~ file: Accommodation.jsx:13 ~ Accommodation ~ accommodation", accommodation)

    useEffect(() => {
        fetch('../logements.json')
            .then(response => response.json())
            .then(res => res.find(elem => elem.id === id) ? setAccommodation(res.find(elem => elem.id === id)) : navigate("/error"))
    }, [id, navigate])

    if (!accommodation) return null

    return (
        <main className={styles.accommodation}>
            <Carrousel pictures={accommodation.pictures} />
            <div className={styles.informations}>
                <div className={styles.titleAndTag}>
                    <div>
                        <p className={styles.title} >{accommodation.title}</p>
                        <p className={styles.location} >{accommodation.location}</p>
                    </div>
                    <div className={styles.tags}>
                        {accommodation.tags.map((tag, key) => (
                            <Tag key={key} tag={tag} />
                        ))}
                    </div>
                </div>

                <div className={styles.nameAndRate}>
                    <Host name={accommodation.host.name} picture={accommodation.host.picture} />
                    <Rate rating={accommodation.rating} />
                </div>
            </div>


            <div className={styles.dropdowns}>
                <Dropdown title={"Description"} text={accommodation.description} open={true} />
                <Dropdown title={"Équipements"} text={accommodation.equipments} open={true} />
            </div>

        </main>
    );
}

export default Accommodation;