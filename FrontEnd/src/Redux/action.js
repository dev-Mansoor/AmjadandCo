// Action in reducer

export const addCart = () =>{
    console.log("Action  Add to cart  is Called ")
    return {
        type : "ADD_TO_CART",
        data : 10
    }
}

export const RemoveCart = () =>{
    console.log("Action  Remove is Called ")
    return {
        type : "REMOVE_FROM_CART",
        data : 5
    }
}

export const LogInAction = () =>{
    // console.log("Action  lOGIN is Called ", log)
    return {
        type : "LOGIN_REQUEST",
        payload: false
    }
}

export const LogOutAction = () =>{
    // console.log("Action  lOGIN is Called ", log)
    return {
        type : "LOGOUT_REQUEST",
        payload: true
    }
}