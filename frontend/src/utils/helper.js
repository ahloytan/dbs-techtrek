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

function isAdmin() {
    const jwt = getCookie('jwt');
    if (jwt) {
        const { app_metadata: { role_id } } = jwtDecode(jwt);
        return role_id === 1;
    }

    return false;
  }

export { getFullName, getSessionId, isAdmin }