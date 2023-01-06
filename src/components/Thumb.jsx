function Thumb(props) {
    return (
        <div className="">
            <p>{props.accomodationTitle}</p>
            <img src={props.cover} alt="le logement" />
        </div>
    );
}

export default Thumb;