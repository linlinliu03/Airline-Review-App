import React from "react";
import Airlines from "./Airlines";
import {BrowserRouter as Router, Link} from "react-router-dom";
import style from "styled-components";

const Card = style.div`
            border: 1px solid #efefef;
            background: #fff;
        `


const AirlineLogo = style.div`
             width: 50px;
             margin-left: auto;
             margin-right: auto;
             padding-top: 10px;
             img{
                 height: 50px;
                 width: 50px;
                 border-radius: 100%;
                 border: 1px solid #efefef;
             }
        `

const AirlineName = style.div`
             padding: 20px 0 10px 0;
        `

const LinkWrapper = style.div`
             margin: 30px 0 20px 0;
             height: 50px;
             a {
                 color: #fff;
                 background: #000;
                 border-radius: 4px;
                 padding: 10px 50px;
                 border: 1px solid #000;
                 width: 100%;
                 text-decoration: none;
             }
        `

const Airline = (props) => {
   return(
       <Card>
          <AirlineLogo>
              <img src={props.attributes.image_url} alt={props.attributes.name} />
          </AirlineLogo>
          <AirlineName>{props.attributes.name}</AirlineName>
          <div className="airline-score">{props.attributes.avg_score}</div>
          <LinkWrapper>
               <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
          </LinkWrapper>
       </Card>
   )
}

export default Airline;