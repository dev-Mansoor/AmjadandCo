// Reducer

const loginstate = false

export const LogRed =(state = loginstate , action )=>{
    // console.log("Reducer")
     switch(action.type){
         case "LOGIN_REQUEST":
             return true 
        case "LOGOUT_REQUEST":
                return false
        default:
        return state
     }

}