import {createStore} from 'redux';
import reducer from '../reducer';
// store
const store = createStore(reducer);
// dispatch
store.dispatch({type : 'CHANGE_POPUP'});
store.dispatch({type : 'CHANGE_ISLOGIN'})


export default store;