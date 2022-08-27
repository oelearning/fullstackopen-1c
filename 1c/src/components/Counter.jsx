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
        onclick={() => handleClick(1)}
        bgcolor='bg-blue-600'
        textcolor='text-white'
      >
        Sumar
      </Button>

      <Button
        onclick={() => handleClick(-1)}
        bgcolor='bg-green-600'
        textcolor='text-white'
      >
        Restar
      </Button>

      <Button
        onclick={() => handleClick(0)}
        bgcolor='bg-red-600'
        textcolor='text-white'
      >
        Reset
      </Button>
      <h2>{isEven ? 'Es par' : 'Es impar'}</h2>
    </div>
  )
}
