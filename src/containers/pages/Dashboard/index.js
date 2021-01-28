import {Component, Fragment} from 'react';
import './Dashboard.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux';
import { addDataAPI,getDataFromAPI,updateDataAPI,deleteDataAPI } from '../../../config/redux/action';



class Dashboard extends Component{
    state={
        title : '',
        content : '',
        date : '',
        textButton : 'Simpan',
        noteId : ''
    }
    componentDidMount(){
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getNotes(userData.user);
    }
    handleSaveNote=()=>{
        const {title,content, textButton,noteId} = this.state;
        const {saveNotes,updateNotes} = this.props;
        // mengambil data login dari localhost(localStorage) dan diparsing ke JSON untuk menghadapi data console all stringify
        const userData = JSON.parse(localStorage.getItem('userData'));
        const data ={
            title : title,
            content : content,
            date : new Date().getTime(),
            userId : userData.user
        }
        if (textButton === 'Simpan') {
            saveNotes(data);
        }else{
            data.noteId = noteId;
            updateNotes(data);
        }
        console.log(data);
    }
    onInputChange=(e,type)=>{
        this.setState({
            [type] : e.target.value
        })
    }
    updateNotes=(note)=>{
        console.log('update :',note);
        this.setState({
            title : note.data.title,
            content : note.data.content,
            textButton : 'Update',
            noteId : note.id
        })
    }
    cancelUpdate=()=>{
        this.setState({
            title : '',
            content : '',
        })
    }
    deleteNote=(e, note)=>{
        console.log('delete',e);
        e.stopPropagation();
        const {deleteNote} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'));
        const data ={
            userId : userData.user,
            noteId : note.id
        }
        deleteNote(data);
    }
    render(){
        const {title,content,textButton}= this.state;
        const {notes} = this.props;
        const {updateNotes}=this;
        console.log('notes :', notes);
        return(
            <div className="container">
                <div className="input-form">
                    <input placeholder="title" className=" input-title mb-3 p-2" value={title} onChange={(e)=>this.onInputChange(e, 'title')} />
                      <textarea className="form-control input-content mb-2" name="" id="" rows="3" placeholder="input content here" value={content} onChange={(e)=>this.onInputChange(e, 'content')}></textarea>
                      <div className="justify-content-between">
                          {
                              textButton === 'Update' ?(
                                  <button className="mt-2 mx-2 btn-secondary btn-md border-0  px-3 py-1 cancel" onClick={this.cancelUpdate}>Cancel</button>
                              ) : <div/>
                            }
                            <button className="mt-2 btn-primary btn-md border-0 px-3 py-1" onClick={this.handleSaveNote}>{textButton}</button>
                      </div>
                    </div>
                    <br/>
                    {
                        notes.length > 0 ? (
                            <Fragment>
                                {
                                    notes.map(note=>{
                                        return(
                                            <div className="col" key={note.id}>
                                                <p className="mb-0 title">{note.data.title}</p>
                                                <p className=" mt-0 date">{note.data.date}</p>
                                                <p className=" mt-1 content">{note.data.content}</p>
                                                    <button className="btn-primary btn-md px-3 py-1 border-0" onClick={()=>updateNotes(note)}>Update</button>
                                                    <button className="delete-btn" onClick={(e)=>this.deleteNote(e,note)}>x</button>
                                                <hr/>
                                            </div>
                                        )
                                    })
                                }
                            </Fragment>
                        ) : null
                    }
                </div>
        )
    }
}
const userState =(state)=>({
    userData : state.user,
    notes : state.notes
})
const reduxDispatch=(dispatch)=>({
    saveNotes : (data)=>dispatch(addDataAPI(data)),
    getNotes : (data)=>dispatch(getDataFromAPI(data)),
    updateNotes : (data) =>dispatch(updateDataAPI(data)),
    deleteNote : (data)=>dispatch(deleteDataAPI(data))
})

export default connect(userState,reduxDispatch)(Dashboard);
