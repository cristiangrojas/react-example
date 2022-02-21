import React, {useState} from 'react'
import './App.css'
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState([
    {
      name: 'Comer',
      description: 'debo comer'
    },
    {
      name: 'Cagar',
      description: 'debo cagar'
    },
    {
      name: 'Dormir',
      description: 'debo mimir'
    },
  ])

  const handleNewBtnClick = () => {
    setTasks([
      ...tasks,
      {
        name: '',
        description: ''
      }
    ])
  }

  return (
      <div>
        <h1>To do</h1>
        <ul>
          {
            tasks.map((task, index) => (
                <Task
                    key={index}
                    name={task.name}
                    description={task.description}/>
            ))
          }
        </ul>
        <button onClick={handleNewBtnClick}>
          add new task
        </button>
      </div>
  )
}

export default App
