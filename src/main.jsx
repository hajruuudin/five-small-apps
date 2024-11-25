// Library specific components & functions:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Styling:
import './index.css'
// Components:
import Homepage from './routes/root'
import ErrorPage from './routes/error'
import TaskManager from './routes/taskmanager/task-root'
import TicTacToe from './routes/tictactoe/ttt-root'
import QuizApplication from './routes/quiz/quiz-root'
import TaskIndex from './routes/taskmanager/task-index'
import TaskList from './routes/taskmanager/components/task-list'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/taskmanager",
    element: <TaskManager/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <TaskIndex/>},
      {
        path: ":list",
        element: <TaskList/>
      }
    ]
  },
  {
    path: "/quizapp",
    element: <QuizApplication/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/tictactoe",
    element: <TicTacToe/>,
    errorElement: <ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
