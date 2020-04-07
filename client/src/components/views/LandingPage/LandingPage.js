import React, { useEffect } from 'react'
import axios from 'axios';
import { response } from 'express';

function LandingPage() {


    useEffect(() => {
        axios.get('http://localhost:5000/api/hello')
        .then(response => console.log(response.data))
        //서버에서 돌아오는 console을 보여줄 수 있도록 한 것임
    }, [])

    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
