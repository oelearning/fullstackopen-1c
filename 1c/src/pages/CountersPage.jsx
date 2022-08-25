import { useState } from 'react'
import { Button } from '../components/Button'

export const CountersPage = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleLeftClick = () => {
    setClicks({
      left: clicks.left + 1,
      right: clicks.right
    })
  }

  const handleRightClick = () => {
    setClicks({
      left: clicks.left,
      right: clicks.right + 1
    })
  }

  const handleResetClick = () => {
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
        <div>
          <Button
            onclick={handleLeftClick}
            text='Left'
            color='bg-blue-600'
          />
          <Button
            onclick={handleResetClick}
            text='Reset'
            color='bg-red-600'
          />
          <Button
            onclick={handleRightClick}
            text='Right'
            color='bg-green-600'
          />
        </div>
        <div>
          {clicks.right}
        </div>
      </div>

    </div>
  )
}
