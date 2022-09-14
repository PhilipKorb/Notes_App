import React from 'react'
import { useState } from 'react'


export default function AddNote({ handleAddNote }) {
const [noteText, setNoteText] = useState('')
const characterLimit = 200;

  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >=0) {
      setNoteText(event.target.value)
    } else {
      
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    } else {

    }
  }

  return (
    <div className="note new">
      <textarea 
      onChange={handleChange} 
      placehoelder="Type to add a note.." 
      value={noteText}
      ></textarea>
      <div className="note__footer">
        <small>{`${characterLimit - noteText.length} Characters Left`}</small>
        <button onClick={handleSaveClick} className='save'>Save</button>
      </div>
    </div>
  )
}
