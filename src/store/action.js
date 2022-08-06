import { ERROR_SEARCH, GET_SEARCH, LOADING_SEARCH } from "./actionType"

export const getSearch=(payload)=>{
    return{
        type:GET_SEARCH,
        payload
    }
}

export const loadingSearch =()=>{
    return{
        type:LOADING_SEARCH
    }
}

export const errorSearch=()=>{
    return{
        type:ERROR_SEARCH
    }
}