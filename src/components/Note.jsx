export default function Note({ id, text, date, handleDeleteNote}) {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note__footer">
        <small>{date}</small>
        <i onClick={() => handleDeleteNote(id)} className="bi bi-trash-fill"></i>
      </div>
    </div>
  )
}
