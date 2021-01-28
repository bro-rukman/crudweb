import firebase,{Database} from '../../firebase';

export const actionType ={
    CHANGE_POPUP : 'CHANGE_POPUP',
    CHANGE_ISLOGIN : 'CHANGE_ISLOGIN',
    CHANGE_USER : 'CHANGE_USER',
    CHANGE_LOADING : 'CHANGE_LOADING',
    SET_NOTES : 'SET_NOTES'
}
// redux thunk untuk update value saja
// export const actionUsername =()=>(dispatch)=>{
//     setTimeout(() => {
//         return dispatch({type :'CHANGE_USER', value : 'Endang Rukmana'});
//     }, 2000); 
    // jika function merupakan asynchronus maka wajib menggunakan middleware lain yaitu dengan redux-thunk  
// }
// redux thunk untuk register
export const registerUserAPI =(data)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        dispatch ({type : 'CHANGE_LOADING', value : true})
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                console.log('success register', res);
                dispatch ({type : 'CHANGE_LOADING', value : false});
                resolve(true);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('err',errorCode,errorMessage);
                dispatch ({type : 'CHANGE_LOADING', value : false});
                reject(false);
            })
    })
}
// redux thunk untuk login
export const loginUserAPI =(data)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        dispatch ({type : 'CHANGE_LOADING', value : true})
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                console.log('success login', res);
                // mengambil data user dari login untuk dijadikan object logic me route ke halaman lain
                const dataUser={
                    email : res.user.email,
                    user : res.user.uid,
                    verified : res.user.emailVerified,
                    refreshToken : res.user.refreshToken
                }
                dispatch ({type : 'CHANGE_LOADING', value : false})
                dispatch ({type : 'CHANGE_ISLOGIN', value : true})
                dispatch ({type : 'CHANGE_USER', value : dataUser})
                resolve(dataUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('error login',errorCode,errorMessage);
                dispatch ({type : 'CHANGE_LOADING', value : false})
                dispatch ({type : 'CHANGE_ISLOGIN', value : false})
                reject(false);
            })
    })
}
// pengolahan data untuk diupload ke dashboard
export const addDataAPI=(data)=>(dispatch)=>{
    Database.ref(`notes/` + data.userId).push({
        title : data.title,
        content : data.content,
        date : data.date,
    })
}
export const getDataFromAPI =(userId)=>(dispatch)=>{
    const urlNotes =Database.ref(`notes/` + userId);
    return new Promise((resolve,reject)=>{
        urlNotes.on('value', function(snapshot){
            console.log('snapshot',snapshot.val());
            if (snapshot.val()!==null) {
                const data = [];
                Object.keys(snapshot.val()).map(key=>{
                    data.push({
                        id : key,
                        data : snapshot.val()[key]
                    })
                })
                dispatch({type : 'SET_NOTES', value :data })
                resolve(snapshot.val());
            }
          });
    })
}
export const updateDataAPI =(data)=>(dispatch)=>{
    const urlNotes =Database.ref(`notes/${data.userId}/${data.noteId}`);
    return new Promise((resolve,reject)=>{
        urlNotes.set({
            title : data.title,
            content : data.content,
            date : data.date,
        }, (err)=>{
            if (err) {
                reject(false)
            }else{
                resolve(true)
            }
        });
    })
}
export const deleteDataAPI =(data)=>(dispatch)=>{
    const urlNotes =Database.ref(`notes/${data.userId}/${data.noteId}`);
    return new Promise((resolve,reject)=>{
        urlNotes.remove();
    })
}

