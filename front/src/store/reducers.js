const initialState = {list:[]}

export default (state = initialState, action)=>{
    switch(action.type){
        case 'NEW_LIST':
            return {...state, list : action.data}
        default:
            return state
    }
}

export const getInfo = state => state.info.list