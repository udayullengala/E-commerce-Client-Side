export const BASE_URL = "http://127.0.0.1:8000"

const URL = {
    signUp: "/api/auth/register/"
}

export const postReq = (name, data, type) => {
    return fetch(`${URL[name]}`, data)
}