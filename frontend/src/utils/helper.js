import { getCookie } from '@/utils/cookies';
import { jwtDecode } from "jwt-decode"; 

function getFullName(){
    const jwt = getCookie('jwt');
    if (jwt) {
        const { app_metadata: { full_name }} = jwtDecode(jwt);
        return full_name;
    }
    return null;
}

function getSessionId(){
    const jwt = getCookie('jwt');
    if (jwt) {
        const { session_id } = jwtDecode(jwt);
        return session_id;
    }
    return null;
}


export { getFullName, getSessionId }