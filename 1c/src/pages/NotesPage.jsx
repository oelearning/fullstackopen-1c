import { useState, useEffect } from 'react'
import { Button } from '../components/Button'
import { Note } from '../components/Note'

export const NotesPage = () => {
  const [notesList, setNotesList] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setNotesList(json)
        setLoading(false)
      })
  }, [])

  const handleTitleChange = (e) => {
    const eventListener = e.target.value
    setNewTitle(eventListener)
  }

  const handleBodyChange = (e) => {
    const eventListener = e.target.value
    setNewBody(eventListener)
  }

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      title: newTitle,
      body: newBody,
      id: notesList.length + 1
    }

    setNotesList(notesList.concat(noteObject))
    setNewTitle('')
  }

  return (
    <div className='p-10 space-y-5'>
      <h1 className='text-3xl pb-5 font-medium'>Notes</h1>
      {loading ? <p>Cargando...</p> : ''}

      <ul className='space-y-3'>
        {notesList?.map(({ id, title, body }) => (
          <Note key={id} title={title} body={body} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <div>
          <div className='space-y-4'>
            <input
              type='text'
              placeholder='Create new title'
              value={newTitle}
              onChange={handleTitleChange}
              className='appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600 flex-1 w-full'
            />
            <input
              type='text'
              placeholder='Create new body'
              value={newBody}
              onChange={handleBodyChange}
              className='appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600 flex-1 w-full'
            />
            <Button
              bgcolor='bg-blue-600'
              hover='bg-blue-700'
              textcolor='text-white'
              width='w-full'
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
