/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import auth from "@/auth/authService";
import  jwt  from "../../http/requests/auth/jwt/index";
export default {
    isUserLoggedIn: () => {
        let isAuthenticated = false

        // get firebase current user
        // const firebaseCurrentUser = firebase.auth().currentUser

        // current user from laravel session
        
        let sessionCurrentUser = false
        if (auth.isAuthenticated() || sessionCurrentUser) isAuthenticated = true
        else isAuthenticated = false
        

        return (isAuthenticated)
    },
}
