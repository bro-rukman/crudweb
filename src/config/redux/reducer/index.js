import {actionType} from '../action';

const initialState ={
    popup : false,
    isLogin : false,
    isLoading: false,
    user : {},
    notes : []
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
        case actionType.SET_NOTES :
            return{
              ...state,
              notes : action.value
            }
            // break;
    
        default:
            break;
    }
  }

  export default reducer;