import Star from "../assets/Star.jsx";

function Rate({ rating }) {

    const stars = Array.from({ length: rating }).fill(1)
    const blankStars = Array.from({ length: 5 - rating }).fill(0)
    stars.push(...blankStars)


    return (
        <div>
            {stars.map((star, index) => {
                return star === 1 ?
                    <Star color={'#FF6060'} key={index} />
                    : <Star color={'#E3E3E3'} key={index} />
            })}
        </div>
    );
}

export default Rate;