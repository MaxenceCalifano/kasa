import Dropdown from "../components/Dropdown";

function About() {

    const exampleText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

    return (
        <div style={{ flexGrow: 2 }}>
            <Dropdown title={"Fiabilité"} text={exampleText} open={false} />
            <Dropdown title={"Respect"} text={exampleText} open={false} />
            <Dropdown title={"Service"} text={exampleText} open={false} />
            <Dropdown title={"Responsabilité"} text={exampleText} open={false} />
        </div>
    );
}

export default About;