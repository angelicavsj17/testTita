
import axios from  'axios'

// constants
const dataInit ={
   post: []  
}

// types
 const SET_POST= 'GET_POST'

// reducer  
export default function postReducer (state = dataInit, action){
switch(action.type){

    case SET_POST:
    return {...state, post: action.payload }
    default:
    return state
}
}
// actions 

export const getPost = () => async (dispatch, getState)=>{ 
try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    dispatch({
    type: SET_POST,
    payload: res.data
 })
} catch (error) {
    console.error(error)
}
}