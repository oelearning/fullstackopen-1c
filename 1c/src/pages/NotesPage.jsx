import { useState, useEffect } from 'react'
import { Button } from '../components/Button'
import { Loading } from '../components/Loading'
import { Note } from '../components/Note'
import axios from 'axios'

export const NotesPage = () => {
  const [notesList, setNotesList] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          const { data } = response
          setNotesList(data)
          setLoading(false)
        })
    }, 2000)
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
    setNewBody('')
  }

  return (
    <div className='p-10 space-y-5 mb-48'>
      <h1 className='text-3xl pb-5 font-medium'>Notes</h1>
      {loading ? <Loading /> : ''}

      <ul className='space-y-3'>
        {notesList?.map(({ id, title, body }) => (
          <Note key={id} title={title} body={body} />
        ))}
      </ul>

      <form onSubmit={addNote} className='fixed w-full h-48 bg-white bottom-0 left-0 p-5 border-t'>
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
