import {actionType} from '../action';

const initialState ={
    popup : false,
    isLogin : false,
    isLoading: false,
    user : 'endang'
  }
  const reducer =(state=initialState,action)=>{
    switch (action.type) {
        case actionType.CHANGE_POPUP :
            return{
              ...state,
              popup : action.value
            }
            // break;
        case actionType.CHANGE_ISLOGIN :
            return{
              ...state,
              isLogin : action.value
            }
            // break;
        case actionType.CHANGE_USER :
            return{
              ...state,
              user : action.value
            }
            // break;
        case actionType.CHANGE_LOADING :
            return{
              ...state,
              isLoading : action.value
            }
            // break;
    
        default:
            break;
    }

    // if (action.type==='CHANGE_POPUP') {
    // }
    // if (action.type==='CHANGE_ISLOGIN') {
    //   return{
    //     ...state,
    //     isLogin : action.value
    //   }
    // }
    // return state;
  }

  export default reducer;