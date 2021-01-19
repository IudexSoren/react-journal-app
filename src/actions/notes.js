import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // Obtener id del usuario
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      urls: []
    }
    // Agregar datos a una colección
    const doc = await db.collection(`${ uid }/journal/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote));
    dispatch(addNewNote(doc.id, newNote));
  }
}

export const activeNote = (id, note) => {
  return {
    type: types.notesActiveEntry,
    payload: {
      id,
      ...note
    }
  }
}

export const addNewNote = (id, note) => {
  return {
    type: types.notesAddEntry,
    payload: {
      id,
      ...note
    }
  }
}

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  }
}

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes
  }
}

export const saveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteToFirestore = { ...note };
    // Remover el atributo ID para que no sea almacenado en Firestore
    delete noteToFirestore.id;
    await db.doc(`${ uid }/journal/notes/${ note.id }`).update(noteToFirestore);
    dispatch(refreshNote(note.id, note));
    Swal.fire('Saved', note.title, 'success');
  }
}

export const refreshNote = (id, note) => {
  return {
    type: types.notesUpdate,
    payload: {
      id,
      note
    }
  }
}

export const startUploading = (files) => {
  return async (dispatch, getState) => {
    const { active } = getState().notes;
    const filesUrl = [];
    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    await files.forEach(async (file) => {
      filesUrl.push(await fileUpload(file));
    });
    setTimeout(() => {
      active.urls = filesUrl;
      console.log(active);
      dispatch(saveNote(active));
      Swal.close();
    }, files.length * 3 * 1000);
  }
}

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await db.doc(`${ uid }/journal/notes/${ id }`).delete();
    dispatch(deleteNote(id));
  }
}

export const deleteNote = (id) => {
  return {
    type: types.notesDelete,
    payload: id
  }
}

export const noteLogoutCleaning = () => {
  return {
    type: types.notesLogoutCleaning
  }
}