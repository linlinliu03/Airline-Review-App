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

const RatingBox = style.div`
             background: #fff;
             display: flex;
             width: 100%;
             justify-content: center;
             overflow: hidden;
             flex-direction: row-reverse;
             position: relative;
             input { display: none; }
             label {
               cursor: pointer;
               width: 40px;
               height: 40px;
               margin-top: auto;
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
               background-repeat: no-repeat;
               background-position: center;
               background-size: 76%;
               transition: .3s;
             }

             input:checked ~ label, input:checked ~ label ~ label {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
             }
             input:not(:checked) ~ label:hover,
             input:not(:checked) ~ label:hover ~ label {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
             }
             
             
`

const Field = style.div`
             border-radius: 4px;

             input{
               min-height: 50px;
               border-radius: 4px;
               border: 1px solid #e6e6e6;
               margin: 12px 0;
               padding: 12px;
             }

             textarea{
               width: 100%
               min-height: 80px;
               border-radius: 4px;
               border: 1px solid #e6e6e6;
               margin: 12px 0;
               padding: 12px;
             }
`


const Wrapper = style.div`
             background: #fff;
             padding: 20px;
`

const SubmitBtn = style.div`
             color: #fff;
             background: #333;
             border-radius: 4px;
             padding: 12px;
             font-size: 18px;
             cursor: pointer;
             transition: ease-in-out 0.1s;
             border: 1px solid #333;

             &:hover{
               background: #fff;
               color: #333;
               border: 1px solid #fff;
             }

`

const Headline = style.div`
           padding: 20px;
           font-size: 20px;
           font-weight: bold;  
`


const ReviewForm = (props) => {
    const ratingScore = [5,4,3,2,1].map((score, idx) => {
        return(
            <Fragment>
                <input type="radio" value={score} checked = {props.review.score === score} name="rating" onChange={() => console.log(score)} id={`rating-${score}`} />
                <label onClick={props.setRating.bind(this,score)}></label>
            </Fragment>
        )
        
    })
    return (
        <Wrapper>
           <form onSubmit={props.handleSubmit}>
               <Headline>Have an experience with {props.attributes.name}? Share your review!</Headline>
               <Field>
                  <input onChange = {props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
               </Field>
                <Field>
                  <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description" />
                </Field>
                <Field>
                    <RatingContainer>
                         <div className="rating-title-text">Rate This Airline</div>
                         <RatingBox>
                            {ratingScore}
                         </RatingBox>
                    </RatingContainer>
                </Field>
          <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
           </form>
        </Wrapper>
    )
}

export default ReviewForm;