import React from 'react';
import './Scores.scss';
import Axios from 'axios'

const Scores = () => {
    Axios
        .get(`http://localhost:8000/api/records/`)
        .then((response) => {
            if (response.data.length !== 0) {
                console.log(response.data)
            }
            else {
                console.log('there are no records')
            }
        })

    return(
        <div className="Scores">
            <div className="Scores-wrapper">
                <h1 className="title">Scores</h1>
            </div>
        </div>
    );
}

export default Scores