import { useState } from 'react'
import { Button } from '../components/Button'

export const FeedbackPage = () => {
  const [review, setReviews] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
    total: 0,
    average: 0
  })

  const handleClick = (feedback = 0) => {
    (feedback === 1)
      ? setReviews({
        ...review,
        good: review.good + 1,
        total: review.total + 1,
        average: review.average + 1
      })
      : (feedback === -1)
          ? setReviews({
            ...review,
            bad: review.bad + 1,
            total: review.total + 1,
            average: review.average - 1
          })
          : (feedback === 0)
              ? setReviews({
                ...review,
                neutral: review.neutral + 1,
                total: review.total + 1
              })
              : setReviews({
                bad: 0,
                good: 0,
                neutral: 0,
                total: 0,
                average: 0
              })
  }

  const averageScore = review.average / review.total
  const positivePorcentage = (review.good / review.total) * 100

  return (
    <div className='p-5'>
      <h1 className='text-3xl'>Feedback</h1>
      <div className='space-x-3 py-5'>
        <Button
          text='Good'
          color='bg-green-600'
          onclick={() => handleClick(1)}
        />
        <Button
          text='Neutral'
          color='bg-blue-600'
          onclick={() => handleClick(0)}
        />
        <Button
          text='Bad'
          color='bg-red-600'
          onclick={() => handleClick(-1)}
        />
        <Button
          text='Reset'
          color='bg-black'
          onclick={() => handleClick(2)}
        />
      </div>

      <div>
        <h2 className='text-2xl'>Statistics</h2>
        <p>Good: {review.good}</p>
      </div>
      <div>
        <p>Neutral: {review.neutral}</p>
      </div>
      <div>
        <p>Bad: {review.bad}</p>
      </div>
      <div>
        <p>Total: {review.total}</p>
      </div>
      <div>
        <p>Average Score: {averageScore || 0}</p>
      </div>
      <div>
        <p>Positive Porcentage: {positivePorcentage || 0}%</p>
      </div>
    </div>
  )
}
