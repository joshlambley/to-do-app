import React, {useState} from 'react'
import {GiBrain} from 'react-icons/gi'
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,300&family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap');
</style>

function App() {
  const [tasks, setTasks] = useState([''])
  const [input, setInput] = useState ('')

//adding tasks

  const handleSubmit = (e) => {
    e.preventDefault()
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false
    }
    setTasks([...tasks, addTask])
    setInput('')
  }

  //deleting tasks
  const deleteTask = (id) => {
   let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id)
   setTasks(filteredTasks)
  }

  //toggle completed
  const toggleComplete= (id) => {
    setTasks(
     tasks.map(task => (
      task.id === id ? {...task, completed: !task.completed } : task
    )))
  }

  //date

  const date = new Date()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  return (
    <div className="app">
      <div className="container">
        <h1><GiBrain/> To do list.</h1>

        <div className='date'>
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}.</p>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="form-input">
          <AiOutlinePlus className='icon' />
          <input 
           value={input}
           onChange={event => setInput(event.target.value)}
           placeholder='Enter a task' 
           type="text" />
        </div>
          
        </form>

        <div>
          {tasks.map(task => (
            <div key={task.id} onDoubleClick={() => toggleComplete(task.id)} className={`task-row ${task.completed ? 'completed' : ''}`}>
              <p>{task.text} </p>
               <AiOutlineClose  onClick={() => deleteTask(task.id)} className='icon' />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
