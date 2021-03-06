import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

export default function (state = {}, action) {
            //state은 전의 state이다. 
    //state = {} 현재 스테이트는 비어있는 상태
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
            //...state 스프레이트오퍼레드(?..) state = {} 이걸 똑같이 가져옴
        case REGISTER_USER:
            return { ...state, register: action.payload }
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;
        default:
            return state;
    }
}