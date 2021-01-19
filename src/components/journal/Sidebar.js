import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import JournalEntries from "./JournalEntries"


const Sidebar = ({ notes }) => {

  const dispatch = useDispatch();

  const { name } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());

  }

  const handleAddEntry = () => {
    dispatch(startNewNote());
  }

  return (
    <aside className="journal__sidebar animate__animated animate__slideInLeft">
      <div className="journal__siderbar-navbar">
        <h3 className="mt-5">
          <i className="far fa-user"></i>
          <span>{ name }</span>
        </h3>
        <button className="btn pointer mt-5" onClick={ handleLogout }>
          <i className="fas fa-sign-out-alt"></i>
          <span> Logout</span>
        </button>
      </div>
      <div className="journal__new-entry pointer" onClick={ handleAddEntry }>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}

export default Sidebar
