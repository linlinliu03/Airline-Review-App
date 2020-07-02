import React from "react";
import style from "styled-components";

const Wrapper = style.div`
        padding: 50px 100px 50px 0;
        font-size: 30px;

        img{
            height: 60px;
            width: 60px;
            border-radius: 100%;
            border: 1px solid rgba(0,0,0, 0.1);
            margin-bottom: -8px;
        }
`

const TotalReviews = style.div`
        font-size: 18px;
        padding: 10px 0;
`

const TotalOutOf = style.div`
        font-size: 18px;
        font-weight: bold;
        padding: 10px 0;
`

const Header = (props) => {
    const {avg_score, name, image_url} = props.attributes;
    const total = props.reviews.length;
    return(
        <Wrapper>
            <h1><img src={image_url}/> {name}</h1>
            <div>
                <TotalReviews>{total} User Reviews</TotalReviews>
                <div className="starRating"></div>
                <TotalOutOf> {total} out of 5</TotalOutOf>
            </div>
        </Wrapper>
    )
}

export default Header;