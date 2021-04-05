import React, { useState, useEffect } from 'react';
import './Scores.scss';
import Axios from 'axios'

const Scores = () => {
    const [userRecords, setUserRecords] = useState([])
    useEffect(() => {
        Axios
        .get(`http://localhost:8000/api/records/`)
        .then((response) => {
            if (response.data.length !== 0) {
                setUserRecords(response.data)
            }
            else {
                console.log('there are no records')
            }
        })
    })
    return(
        <div className="Scores">
            <div className="Scores-wrapper">
                <div className="Scores-wrapper-content">
                    <h1 className="title">Scores</h1>
                    <div className="scores-tab">
                        <div className="first-line scores-line">
                            <div className="id">#</div>
                            <div className="login">Login</div>
                            <div className="score">Score</div>
                        </div>
                        {userRecords.map((record, index) => 
                            <div className="record-line scores-line">
                                <div className="id">{index + 1}</div>
                                <div className="login">{record.user_login}</div>
                                <div className="score">{record.score}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Scores