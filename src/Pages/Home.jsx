import styles from "../styles/home.module.css";
import Thumb from "../components/Thumb";
import { useEffect, useState } from "react";

function Home() {
    const [accomodations, setAccomodations] = useState([])
    useEffect(() => {
        fetch("./logements.json")
            .then(response => response.json())
            .then(res => setAccomodations(res))
    }, [])

    const listOfAccomodations = accomodations.map((accomodation, key) => <Thumb key={accomodation.id} accomodation={accomodation} />)

    console.log(accomodations)
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.overlay}>
                    <p>Chez vous, partout et ailleurs</p>
                </div>
                <div className={styles.backgroundImage}></div>
            </div>
            {listOfAccomodations}
        </div>
    );
}

export default Home;