import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  HomePage,
  CounterPage,
  CountersPage,
  NotesPage,
  FeedbackPage
} from '../pages'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/counters' element={<CountersPage />} />
        <Route path='/notes' element={<NotesPage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
      </Routes>
    </BrowserRouter>
  )
}
