export const Statistics = ({
  good = 0,
  bad = 0,
  neutral = 0,
  total = 0,
  averageScore = 0,
  positivePorcentage = 0
}) => {
  return (
    <div>
      <h2 className='text-2xl'>Statistics</h2>
      <div>
        <p>Good: {good}</p>
      </div>
      <div>
        <p>Neutral: {neutral}</p>
      </div>
      <div>
        <p>Bad: {bad}</p>
      </div>
      <div>
        <p>Total: {total}</p>
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
