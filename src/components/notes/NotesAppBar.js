

const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <div className="notes__appbar-date">
        <i className="far fa-calendar-alt"></i>
        <span>28 de agosto 2020</span>
      </div>
      <div>
        <button className="btn pointer">
          <i className="far fa-image"></i>
          <span>Add Pictures</span>
        </button>
        <button className="btn btn-important pointer">
          <i className="far fa-save"></i>
          <span>Save</span>
        </button>
      </div>
    </div>
  )
}

export default NotesAppBar
