export default (state= {email:''}, action )=>{
    
    switch(action.type){
        case 'Email':
            return {...state, email:action.payload};
            default:
                return state
    }
}