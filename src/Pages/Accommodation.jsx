import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Accommodation() {
    //Get accommodation id the url
    let { id } = useParams();

    const [accommodation, setAccommodation] = useState();
    console.log("🚀 ~ file: Accommodation.jsx:9 ~ Accommodation ~ accommodation", accommodation)

    useEffect(() => {
        fetch('../logements.json')
            .then(response => response.json())
            .then(res => setAccommodation(res.find(elem => elem.id === id)))
    }, [id])

    return (
        <div>
            <p>{accommodation.title}</p>
            <p>{accommodation.location}</p>
        </div>
    );
}

export default Accommodation;