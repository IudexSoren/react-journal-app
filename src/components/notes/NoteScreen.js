import NotesAppBar from "./NotesAppBar"


const NoteScreen = () => {
  return (
    <div className="notes__main-content" >
      <NotesAppBar />
      <div className="notes__content">
        <input
          autoComplete="off"
          type="text"
          placeholder="An awesome title..."
          name=""
          className="notes__title-input" />
        <textarea
          name=""
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://hdqwalls.com/wallpapers/best-nature-image.jpg"
            alt="JournalImage"
          />
        </div>
      </div>
    </div>
  )
}

export default NoteScreen
