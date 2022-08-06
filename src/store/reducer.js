import { ERROR_SEARCH, GET_SEARCH, LOADING_SEARCH } from "./actionType";

const init={
    loading:false,
    error:false,
    data:[]
}

export const reducer =(state=init,{type,payload})=>{
    switch (type) {
        case GET_SEARCH :
            return{
                ...state,
                loading:false,
                error:false,
                data:payload
            }
            case LOADING_SEARCH:
                return{
                    ...state,
                    loading:true,
                    error:false
                }

            case ERROR_SEARCH:
                return{
                    ...state,
                    loading:false,
                    error:true
                }
    
        default:
            return state
    }
}