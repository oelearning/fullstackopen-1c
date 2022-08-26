export const Note = ({ content = 'Content missing' }) => {
  return (
    <li className='bg-slate-200 p-4 rounded-lg'>
      <p>{content}</p>
    </li>
  )
}
