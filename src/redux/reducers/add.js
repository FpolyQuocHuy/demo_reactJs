const initState = {
    listProducts : []
}

const rootReducer = (state = initState, action) => {
    console.log({state , action});
    switch (action.type) {
        case "ADD_PRODUCT" : 
        return {
            ...state, 
            listProducts : [
                ...state.listProducts ,
                 action.payload  
            ]
        }
        default : 
             return state;
    }
}
export default rootReducer