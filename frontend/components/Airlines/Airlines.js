import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";

const Airlines = () => {
    
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/airlines.json')
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }, [airlines.length])


    return (
        <div>This is our Airlines index component!</div>
    )
}

export default Airlines;