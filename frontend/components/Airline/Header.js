import React from "react";

const Header = (props) => {
    const {avege_score, name, image_url} = props.attributes;
    const total = props.reviews.length;
    return(
        <div className="wrapper">
            <h1><img src={image_url}/>{name}</h1>
            <div>
                <div className="totalReviews">{total} User Reviews</div>
                <div className="starRating"></div>
                <div className="totalOutOf"> {avege_score} out of 5</div>
            </div>
        </div>
    )
}

export default Header;