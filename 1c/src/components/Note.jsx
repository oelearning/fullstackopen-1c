export const Note = ({ title = 'Title missing', body = 'Body missing' }) => {
  return (
    <li className='bg-slate-200 p-4 rounded-lg space-y-4'>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p>{body}</p>
    </li>
  )
}
