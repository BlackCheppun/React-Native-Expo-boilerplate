import axios from "axios"

const baseURL = "" // the url of your API.


// for fetching, sending json data, use Axios Client for common requests
const AxiosClient = axios.create({
    baseURL : baseURL,
    timeout : 3000,
    headers : {
        "Content-Type" : "application/json"
    }
})


// for sending multipart/form-data, use MultiPartAxiosClient for file uploads
const MultiPartAxiosClient = axios.create({
    baseURL : baseURL,
    timeout : 3000,
    headers : {
        "Content-Type" : "multipart/form-data"
    }, 
    transformRequest: [ 
        (data) => {return data}
    ]
})


// on successful login, use this function to set the token for the AxiosClient and MultiPartAxiosClient
// token are for verifying the user's identity and permit API access
function setAxiosToken(token: string) {
    AxiosClient.defaults.headers['Authorization'] = `Bearer ${token}`;
    MultiPartAxiosClient.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export { AxiosClient, MultiPartAxiosClient, setAxiosToken}