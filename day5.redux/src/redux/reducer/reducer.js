//reducer은 항상 state한테 값을 return 해줘야 함
let initialState = {
    count:0,
    id:"",
    password:"",
}

function reducer(state=initialState, action){
    console.log("action?", action);
    if(action.type === "INCREMENT"){
        //...state는 다른 state 값은 유지하라는 것
        return {
            ...state, 
            count: state.count + action.payload.num
        };
    }else if(action.type === "LOGIN"){
        return {
            ...state, 
            id:action.payload.id, 
            password:action.payload.password,
        };
    }
    //기본 return 필요
    return{...state};
}

export default reducer;