

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/2016/04/Photos-images-space-wallpaper-HD.jpg)`,
          backgroundPosition: 'center'
        }}>
      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title mb-1">
          Purrumaw
        </p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consectetur.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}

export default JournalEntry
