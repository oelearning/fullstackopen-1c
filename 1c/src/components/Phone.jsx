export const Phone = ({ name = 'Content missing', phone = '' }) => {
  return (
    <li className='bg-slate-200 p-4 rounded-lg flex space-x-5'>
      <p>{name}:</p>
      <p>{phone}</p>
    </li>
  )
}
