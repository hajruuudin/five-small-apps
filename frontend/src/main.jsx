// Library specific components & functions:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Styling:
import './index.css'
// Components:
import Homepage from './routes/root'
import ErrorPage from './routes/error'
import TaskManager, {loader as taskManagerLoader} from './routes/taskmanager/task-root'
import TicTacToe from './routes/tictactoe/ttt-root'
import QuizApplication from './routes/quiz/quiz-root'
import TaskIndex from './routes/taskmanager/task-index'
import TaskList, {loader as taskListLoader} from './routes/taskmanager/components/task-list'
import TaskAddForm, {action as taskAddAction} from './routes/taskmanager/components/task-add'
import ListAddForm, {action as listAddAction} from './routes/taskmanager/components/task-list-add'
import ListDeleteForm, {action as deleteAction} from './routes/taskmanager/components/task-list-delete'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/taskmanager",
    element: <TaskManager/>,
    loader: taskManagerLoader,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <TaskIndex/>},
      {
        path: ":listId",
        element: <TaskList/>,
        loader: taskListLoader
      },
      {
        path: ":listId/addTask",
        element: <TaskAddForm />,
        action: taskAddAction
      },
      {
        path: "addList",
        element: <ListAddForm />,
        action: listAddAction
      },
      {
        path: ":listId/deleteConfirm",
        element: <ListDeleteForm />,
        children: [
          {
            path: "destroy",
            action: deleteAction,
          },
        ]
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
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
      />
    <RouterProvider router={router}/>
  </StrictMode>,
)
