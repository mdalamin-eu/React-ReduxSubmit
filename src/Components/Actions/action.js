import {Email} from './Types'
export const emailAction = (email) => async dispatch =>{
    dispatch({type:Email, payload:email});
}