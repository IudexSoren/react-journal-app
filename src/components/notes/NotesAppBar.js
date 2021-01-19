import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { saveNote, startUploading } from '../../actions/notes';


const NotesAppBar = () => {

  const dispatch = useDispatch();

  const { active } = useSelector(state => state.notes);

  const noteDate = moment(active.date);

  const handleSaveNote = () => {
    dispatch(saveNote(active));
  }

  const handleAddPictures = () => {
    document.querySelector('#addPictures').click();
  }

  const handleFileChange = (e) => {
    let files = [...e.target.files];
    files = files.filter((file, i) => (i < 3) && file);
    if (files.length !== 0) {
      dispatch(startUploading(files));
    }
  }

  return (
    <div className="notes__appbar">
      <div className="notes__appbar-date">
        <i className="far fa-calendar-alt"></i>
        <span>{`${ noteDate.format('D') } ${ noteDate.format('MMMM') } ${ noteDate.format('YYYY') }`}</span>
      </div>
      <input
        type="file"
        id="addPictures"
        name="file"
        multiple
        style={{ display: "none" }}
        onChange={ handleFileChange }
      />
      <div>
        <button className="btn pointer" onClick={ handleAddPictures }>
          <i className="far fa-image"></i>
          <span>Add Pictures</span>
        </button>
        <button className="btn btn-important pointer" onClick={ handleSaveNote }>
          <i className="far fa-save"></i>
          <span>Save</span>
        </button>
      </div>
    </div>
  )
}

export default NotesAppBar
