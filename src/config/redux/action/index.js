import firebase from '../../firebase';

export const actionType ={
    CHANGE_POPUP : 'CHANGE_POPUP',
    CHANGE_ISLOGIN : 'CHANGE_ISLOGIN',
    CHANGE_USER : 'CHANGE_USER',
    CHANGE_LOADING : 'CHANGE_LOADING'
}

export const actionUsername =()=>(dispatch)=>{
    setTimeout(() => {
        return dispatch({type :'CHANGE_USER', value : 'Endang Rukmana'});
    }, 2000); 
    // jika function merupakan asynchronus maka wajib menggunakan middleware lain yaitu dengan redux-thunk  
}
export const registerUserAPI =(data)=>(dispatch)=>{
    dispatch ({type : 'CHANGE_LOADING', value : true})
    return(
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
            console.log('success', res);
            dispatch ({type : 'CHANGE_LOADING', value : false})
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('err',errorCode,errorMessage);
            dispatch ({type : 'CHANGE_LOADING', value : false})
        })
    )
}