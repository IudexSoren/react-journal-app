import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar"


const NoteScreen = () => {

  const { active: note } = useSelector(state => state.notes);

  const dispatch = useDispatch();

  const [ formValues, handleInputChange, reset ] = useForm(note);

  // Se debe obtener la imagen de note, debido a que no puede establecerse como parte del formValues por ser un arreglo (?)
  const { body, title } = formValues;
  const { urls } = note;

  const activeId = useRef(note.id);

  const handleDelete = () => {
    dispatch(startDeleting(activeId.current));
  }

  useEffect(() => {
    if (activeId.current !== note.id) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  // Actualizar cambios (Sin guardarlos en la base de datos) en la nota activa
  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content animate__animated animate__slideInRight" >
      <NotesAppBar />
      <div className="notes__content">
        <input
          autoComplete="off"
          type="text"
          placeholder="An awesome title..."
          name="title"
          value={ title }
          className="notes__title-input"
          onChange={ handleInputChange } />
        <textarea
          name="body"
          value={ body }
          placeholder="What happened today?"
          className="notes__textarea"
          onChange={ handleInputChange }
        ></textarea>
        {
          (urls) && ((urls.length !== 0) &&
          <div className="notes__image animate__animated animate__slideInUp" >
            {urls.map((url, i) =>
              <img
                className="animate__animated animate__fadeIn"
                key={ i }
                src={`${ url }`}
                alt={ `JournalImage ${ i }` }
              />
            )}
          </div>)
        }
      </div>
      <button className="btn btn-danger pointer" onClick={ handleDelete }>Delete entry</button>
    </div>
  )
}

export default NoteScreen
