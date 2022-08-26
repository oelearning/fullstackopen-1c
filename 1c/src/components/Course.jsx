export const Course = ({ name, parts }) => {
  const exercisesArr = []
  parts.map(({ exercises }) => exercisesArr.push(exercises))

  const totalExercises = exercisesArr.reduce((sum, current) => sum + current, 0)

  return (
    <li className='space-y-3'>
      <h2 className='text-2xl'>{name}</h2>
      <ul className='space-y-3'>
        {parts?.map(({ id, name, exercises }) => (
          <div key={id} className='flex items-center space-x-3'>
            <p>{name}:</p>
            <p className='font-bold'>{exercises}</p>
          </div>
        ))}

        <p className='font-bold'>Total of exercises: {totalExercises}</p>
      </ul>
    </li>
  )
}
