import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducer';
// store
export const store = createStore(reducer, applyMiddleware(thunk));

// dispatch
store.dispatch({type : 'CHANGE_POPUP'});
store.dispatch({type : 'CHANGE_ISLOGIN'});
// store.dispatch({type : 'CHANGE_USER'});
store.dispatch ({type: 'CHANGE_LOADING'})


// export {store}; 
// bisa juga menggunakan export ini