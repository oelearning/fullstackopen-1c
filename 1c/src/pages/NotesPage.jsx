import { useState } from 'react'
import { Note } from '../components/Note'
import { notes } from '../data/notes'

export const NotesPage = () => {
  const [notesList, setNotesList] = useState(notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      import: Math.random() < 0.5,
      id: notesList.length + 1
    }

    setNotesList(notesList.concat(noteObject))
    setNewNote('')
  }

  const notesToShow = showAll
    ? notesList
    : notesList.filter(note => note.important === true)

  const toggleNotesToShow = () => {
    setShowAll(!showAll)
  }

  return (
    <div className='p-10 space-y-5'>
      <h1 className='text-3xl pb-5 font-medium'>Notes</h1>
      <div>
        <button
          className='bg-purple-600 text-white py-2 px-5 rounded hover:bg-purple-700'
          onClick={toggleNotesToShow}
        >
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      {
        (typeof notesToShow === 'undefined' || notesToShow.length === 0)
          ? <p>There are not notes to show</p>
          : <ul className='space-y-3'>
            {notesToShow?.map(({ id, content }) => (
              <Note key={id} content={content} />
            ))}
          </ul>
      }
      <form onSubmit={addNote}>
        <div>
          <div className='w-full flex space-x-3'>
            <input
              type='text'
              placeholder='Create new note'
              value={newNote}
              onChange={handleNoteChange}
              className='appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600 flex-1'
            />
            <button
              className='bg-blue-600 text-white py-2 px-5 rounded hover:bg-blue-700'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
