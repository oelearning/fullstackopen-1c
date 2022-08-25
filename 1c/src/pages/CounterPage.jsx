import { Counter } from '../components/Counter'

export const CounterPage = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center space-y-7'>
      <h1 className='text-3xl'>Counter Page</h1>
      <Counter />
    </div>
  )
}
