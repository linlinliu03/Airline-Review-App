import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import Header from "./Header";
import style from "styled-components";
import ReviewForm from "./ReviewForm";

const Wrapper = style.div`
          margin-left: auto;
          margin-right: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          height: 100%;
`

const Column = style.div`
          background: #fff;
          height: 100hv;
          overflow: scroll;

          &: last-child{
              background: #000;
          }
`

const Main = style.div`
          padding-left: 50px
`

const Airline = (props) => {
    const [airline, setAirline] = useState({});
    const [review, setReview] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
       const slug = props.match.params.slug;
       const url = `/api/v1/airlines/${slug}`;

       axios.get(url)
            .then(response => {
                setAirline(response.data);
                console.log(response)
                setLoaded(true);
            })
            .catch(error => console.log(error))
    }, [])

    const handleSubmit = (e) => {
        console.log("hi")
        e.preventDefault();

        const csrfToken = document.querySelector("[name=csrf-token]").content;

        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

        const airline_id = airline.data.id;
        axios.post("/api/v1/reviews", {review, airline_id})
             .then(resp => {
                 const included = [...airline.included, resp.data.data]
                 setAirline({...airline,included})
                 console.log(resp)
                 setReview({title:"", description:"", score:0})
             })
             .catch(error => console.log(error))
    }

    const handleChange = (e) => {
        e.preventDefault();

        setReview(Object.assign({}, review, {[e.target.name]:e.target.value}))
    }

    const setRating = (score, e) => {
       setReview({...review, score})
    }

    return (
        <Wrapper>
          {loaded && 
          <Fragment>
             <Column>
                 <Main>
                    <Header
                        attributes={airline.data.attributes}
                        reviews={airline.included}
                    />
                    <div className="reviews">Reviews</div>
                 </Main>
              </Column>
              <Column>
                    <ReviewForm 
                       handleChange = {handleChange}
                       handleSubmit={handleSubmit}
                       setRating = {setRating}
                       attributes = {airline.data.attributes}
                       review = {review}
                    />
              </Column>
          </Fragment>
          } 
        </Wrapper>
    )
}

export default Airline;