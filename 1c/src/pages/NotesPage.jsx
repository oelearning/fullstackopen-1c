import { Note } from '../components/Note'
import { notes } from '../data/notes'

export const NotesPage = () => {
  return (
    <div className='p-5 m-0'>
      <h1 className='text-3xl'>Notes</h1>
      <ul>
        {notes?.map(({ id, content }) => (
          <Note key={id} content={content} />
        ))}
      </ul>
    </div>
  )
}
