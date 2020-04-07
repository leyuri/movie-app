import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
//useDispatch를 이용해서 엑션을 취하고, 그 다음에 리듀서 -> 이 순서로 나아간다. 
import { loginUser } from '../../../_actions/user_action';

function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        //이걸 하지 않으면 페이지가 그냥 리프레쉬 되버린다. 따라서 이걸 방지해야 하낟. 
        // let 은 변수에 재할당이 가능하다.
        // const는 변수 재선언, 변수 재할당 모두 불가능하다.

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                    //LandingPage로 돌아가기
                } else {
                    alert('Error˝')
                }
            })


    }


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage