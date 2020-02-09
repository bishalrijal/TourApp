import axios from "../../../axios/index.js"
import store from "../../../../store/store.js"

// Token Refresh
let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber(callback) {
  subscribers.push(callback)
}

export default {
  init() {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error
      const originalRequest = config

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          store.dispatch("auth/fetchAccessToken")
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(access_token)
            })
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber(access_token => {
            originalRequest.headers.Authorization = 'Bearer ' + access_token
            resolve(axios(originalRequest))
          })
        })
        return retryOriginalRequest
      }
      return Promise.reject(error)
    })
  },
  login(email, pwd) {
    return axios.post("/api/login", {email: email, password: pwd})
  },
  registerUser(name, email, usercode,pwd, con_pwd,role,) {
    return axios.post("/api/register", {username: name, 
                                        email: email, 
                                        user_code : usercode,
                                        password: pwd, 
                                        password_confirmation: con_pwd,
                                        is_active: true,
                                        role: role,

                                      })
  },
  refreshToken() {
    return axios.post("/api/auth/refresh-token", {accessToken: localStorage.getItem("accessToKen")})
  },
  sessionUser() {
    return axios.get('/api/session-user')
  },
  logout(){
    axios.get('/api/logout')
  }
}
