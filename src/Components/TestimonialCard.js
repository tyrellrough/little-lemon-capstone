const TestimonialCard = ({ rating, image, review, name }) => {
    return (
        <div className="w-[20%] bg-white">
            <div>
                <p>{rating}/5</p>
                <div className="flex ">
                    <img src={image} width="20%" className="pl-[3%] pr-[3%]"/>
                    <p className="pr-[3%]">{review}</p>
                </div>
                <p>{name}</p>
            </div>
        </div>
    );
}

export default TestimonialCard;