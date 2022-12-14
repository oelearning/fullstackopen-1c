import { useState } from 'react'
import { Button } from '../components/Button'

export const CountersPage = () => {
  const [allClicks, setAllClicks] = useState([])
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setClicks({
      ...clicks,
      left: clicks.left + 1
    })
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({
      ...clicks,
      right: clicks.right + 1
    })
  }

  const handleResetClick = () => {
    setAllClicks([])
    setClicks({
      left: 0,
      right: 0
    })
  }

  return (
    <div className='p-7 w-full h-screen'>
      <h1 className='text-center text-3xl'>Counters Page</h1>

      <div className='flex justify-center items-center pt-10 space-x-5'>
        <div>
          {clicks.left}
        </div>
        <div className='space-x-5'>
          <Button
            onclick={handleLeftClick}
            bgcolor='bg-blue-600'
            textcolor='text-white'
          >
            Left
          </Button>

          <Button
            onclick={handleResetClick}
            bgcolor='bg-red-600'
            textcolor='text-white'
          >
            Reset
          </Button>

          <Button
            onclick={handleRightClick}
            bgcolor='bg-green-600'
            textcolor='text-white'
          >
            Right
          </Button>
        </div>
        <div>
          {clicks.right}
        </div>
      </div>
      <p className='text-center pt-5'>{allClicks.join(' ')}</p>

    </div>
  )
}
