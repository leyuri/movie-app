import axios from 'axios';
import {
    LOGIN_USER
} from './types';
export function loginUser(dataToSubmit) {
    /*
        let body = {
        email: Email,
        password: Password
    }
    dataToSubmit라는 파라미터를 통해 담는다. 
    */

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)
        //서버에서 받은 데이터를 request에다 저장한다. 

    return {
        type: LOGIN_USER,
        payload: request
        //리턴을 시켜서 reducer에 넘겨줘야 한다.
        //request를 payload에 넣은 것, request는 백엔드에서 가져온 모든 데이터이다. 이것을 리듀서에 넣어줌 
    }
}