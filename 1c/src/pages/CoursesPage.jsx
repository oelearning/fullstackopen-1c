import { Course } from '../components/Course'
import { courses } from '../data/courses'

export const CoursesPage = () => {
  return (
    <div className='p-5 m-0'>
      <h1 className='text-3xl font-semibold pb-5'>Courses</h1>
      {
        (typeof courses === 'undefined' || courses.length === 0)
          ? <p>There are not courses to show</p>
          : <ul className='space-y-10'>
            {courses?.map(({ id, name, parts }) => (
              <Course key={id} name={name} parts={parts} />
            ))}
            </ul>
      }
    </div>
  )
}
