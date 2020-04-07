import React,{ useEffect} from 'react'
import axios from 'axios';

function LandingPage() {

     useEffect(() => {
        axios.get('/api/hello')
        .then(response=> { console.log(response)})
        //서버에서 돌아오는 console을 보여줄 수 있도록 한 것임
     }, [])

     return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
        </div>
    )
}

export default LandingPage