import { useState } from 'react'
import { Button } from '../components/Button'
import { Phone } from '../components/Phone'

export const PhoneBookPage = () => {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleNameChange = (e) => {
    const listener = e.target.value
    setNewName(listener)
  }

  const handlePhoneChange = (e) => {
    const listener = e.target.value
    setNewPhone(listener)
  }

  const addName = (e) => {
    e.preventDefault()
    const nameObject = {
      name: newName,
      phone: newPhone,
      important: Math.random() < 0.5,
      id: contacts.length + 1
    }

    setContacts(contacts.concat(nameObject))
    setNewName('')
    setNewPhone('')
  }

  const contactsToShow = showAll
    ? contacts
    : contacts.filter(contact => contact.important === true)

  console.log(contactsToShow)

  const togglecontactsToShow = () => {
    setShowAll(!showAll)
  }

  return (
    <div className='p-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl pb-5 font-medium'>Phone Book</h1>
        <div>
          <Button
            bgcolor='bg-purple-600'
            hover='bg-purple-700'
            textcolor='text-white'
            onclick={togglecontactsToShow}
          >
            Show {showAll ? 'important' : 'all'}
          </Button>
        </div>
      </div>
      <div className='py-5'>
        {
        (typeof contactsToShow === 'undefined' || contactsToShow.length === 0)
          ? <p>There are not names to show</p>
          : <ul className='space-y-3'>
            {contactsToShow?.map(({ id, name, phone }) => (
              <Phone key={id} name={name} phone={phone} />
            ))}
          </ul>
      }
      </div>
      <form onSubmit={addName}>
        <div className='mb-4 space-y-4'>
          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Name
            </label>
            <div className='space-y-2'>
              <input
                type='text'
                placeholder='name'
                onChange={handleNameChange}
                value={newName}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              <input
                type='text'
                placeholder='phone'
                onChange={handlePhoneChange}
                value={newPhone}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
          </div>
          <Button
            bgcolor='bg-blue-600'
            textcolor='text-white'
            hover='bg-blue-700'
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  )
}
