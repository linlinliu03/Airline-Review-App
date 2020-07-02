import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import style from "styled-components";

const Wrapper = style.div`
          margin-left: auto;
          margin-right: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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
    const [reviews, setReviews] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
       const slug = props.match.params.slug;
       const url = `/api/v1/airlines/${slug}`;

       axios.get(url)
            .then(response => {
                setAirline(response.data);
                setLoaded(true);
                console.log(response)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <Wrapper>
            <Column>
               <Main>
                    {loaded &&
                        <Header
                            attributes={airline.data.attributes}
                            reviews={airline.included}
                        />
                    }
                    <div className="reviews">Reviews</div>
               </Main>
            </Column>
            <Column>
                <div className="review-form">Coming soon!</div>
            </Column>
        </Wrapper>
    )
}

export default Airline;