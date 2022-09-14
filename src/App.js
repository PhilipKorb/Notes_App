import { useState } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header'

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "First Note",
    date: "06/09/2022"
  },{
    id: nanoid(),
    text: "Second Note",
    date: "06/09/2022"
  },{
    id: nanoid(),
    text: "Third Note",
    date: "06/09/2022"
  },{
    id: nanoid(),
    text: "Fourt Note",
    date: "06/09/2022"
  }
])

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id)
    setNotes(newNotes)
  }

  const [searchText, setSearchText] =useState('')

  return (
    <>   
    <Header /> 
      <div className="container">
        <Search handleSearchNote={setSearchText} />
        <NotesList 
        notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}/>
      </div>
    </>
  );
}

export default App;
