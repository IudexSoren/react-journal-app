import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

const JournalEntry = ({ id, title, body, date, urls = [] }) => {

  const noteDate = moment(date);

  const image = urls.length !== 0 && urls[0];

  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(activeNote(id, {
      title,
      body,
      date,
      urls
    }))
  }

  return (
    <div className="journal__entry animate__animated animate__flipInX pointer" onClick={ handleEntryClick }>
      <div
        className="journal__entry-picture animate__animated animate__fadeIn"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${ (image) && image })`,
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {
            (image) ? '' : <i class="fas fa-images fa-3x"></i>
          }
      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title mb-1">
          { title }
        </p>
        <p className="journal__entry-content">
          { body }
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>{ noteDate.format('dddd') }</span>
        <h4>{ noteDate.format('Do') }</h4>
      </div>
    </div>
  )
}

export default JournalEntry
