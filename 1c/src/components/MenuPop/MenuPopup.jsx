import { NavLink } from 'react-router-dom'
import { LINKS } from './'

export const MenuPopup = ({ links }) => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center space-y-7'>
      {LINKS.map(link => {
        return (
          <li
            key={link.name}
            className='list-none uppercase text-3xl hover:text-blue-500'
          >
            <NavLink to={link.path}>
              {link.name}
            </NavLink>
          </li>
        )
      })}
    </div>
  )
}
