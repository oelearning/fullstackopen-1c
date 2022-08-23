import { useState } from 'react'
import { Button } from './Button'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = (op) => {
    (op === 1)
      ? setCounter(counter + 1)
      : (op === -1)
          ? setCounter(counter - 1)
          : setCounter(0)
  }

  const isEven = counter % 2 === 0

  return (
    <div>
      <h1 className='text-xl'>{counter}</h1>
      <Button
        text='Sumar'
        onclick={() => handleClick(1)}
        color='bg-blue-600'
      />
      <Button
        text='Restar'
        onclick={() => handleClick(-1)}
        color='bg-green-600'
      />
      <Button
        text='Reset'
        onclick={() => handleClick(0)}
        color='bg-red-600'
      />
      <h2>{isEven ? 'Es par' : 'Es impar'}</h2>
    </div>
  )
}
