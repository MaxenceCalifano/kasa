import styles from "../styles/home.module.css";
import Thumb from "../components/Thumb";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";

function Home() {
    const [accomodations, setAccomodations] = useState([])
    useEffect(() => {
        fetch("./logements.json")
            .then(response => response.json())
            .then(res => setAccomodations(res))
    }, [])

    const listOfAccomodations = accomodations.map((accomodation) => <Thumb key={accomodation.id} accomodation={accomodation} />)

    return (
        <main>
            <Banner url={'url(banner.png)'}>
                Chez vous, partout et ailleurs
            </Banner>
            <div className={styles.thumbs}>
                {listOfAccomodations}
            </div>
        </main>
    );
}

export default Home;