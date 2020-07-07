import React, {Fragment} from "react";
import style from "styled-components";

const RatingContainer = style.div`
             text-align: center;
             border-radius: 4px;
             font-size: 18px;
             padding: 40px 0 10px 0;
             border: 1px solid #e6e6e6;
             background: #fff;
`


const ReviewForm = (props) => {
    const ratingScore = [5,4,3,2,1].map((score, idx) => {
        return(
            <Fragment>
                <input type="radio" value={score} name="rating" onChange={() => console.log(score)} id={`rating-${score}`} />
                <label></label>
            </Fragment>
        )
        
    })
    return (
        <div className="Wrapper">
           <form onSubmit={props.handleSubmit}>
               <div>Have an experience with {props.attributes.name}? Share your review!</div>
               <div className="field">
                  <input onChange = {props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
               </div>
                <div className="field">
                  <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description" />
                </div>
                <div className="field">
                    <RatingContainer>
                         <div className="rating-title-text">Rate This Airline</div>
                         {ratingScore}
                    </RatingContainer>
                </div>
               <button type="submit">Submit Your Review</button>
           </form>
        </div>
    )
}

export default ReviewForm;