import { getCookie } from '@/utils/cookies';
import { jwtDecode } from "jwt-decode"; 

function getUserDetailsFromJwt(){
    const jwt = getCookie('jwt');
    if (jwt) {
        const { session_id, app_metadata: { full_name, role_id, unique_code }, sub, user_metadata: { email } } = jwtDecode(jwt);
        return [session_id, full_name, sub, role_id, email, unique_code];
    }
    return null;
}

function isAdmin(role_id) {
    return role_id === 1;
  }

export { getUserDetailsFromJwt, isAdmin }