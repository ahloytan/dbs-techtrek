function setCookie(name, value) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    const expiresString = expires.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expiresString}; path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

export { setCookie, getCookie }