import Star from "../assets/Star.jsx";

function Rate({ rating }) {

    const stars = Array.from({ length: rating })
    const blankStars = Array.from({ length: 5 - rating })



    return (
        <div style={{ display: 'flex' }}>
            {stars.map((star, index) => <Star color={'#FF6060'} key={index} />)}
            {blankStars.map((star, index) => <Star color={"#E3E3E3"} key={index} />)}
        </div>
    );
}

export default Rate;