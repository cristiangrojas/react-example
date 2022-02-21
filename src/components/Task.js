import React, {useState} from 'react'
import CheckBtn from '../components/CheckBtn'

export default function Task({name, description}) {
  const [completed, setCompleted] = useState(false)
  const [editMode, setEditMode] = useState(name.length === 0 && description.length === 0)
  const [title, setTitle] = useState(name)

  const handleCompleteBtnClick = () => setCompleted(!completed)

  const handleEditModeBtnClick = () => setEditMode(!editMode)

  const handleTitleChange = event => setTitle(event.target.value)

  return (
      <li>
        <h4>
          <CheckBtn
              checked={completed}
              onClick={handleCompleteBtnClick}/>
          {
            editMode
                ?
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}/>
                :
                title
          }
        </h4>
        <p>{description}</p>
        <button onClick={handleEditModeBtnClick}>
          edit mode
        </button>
      </li>
  )
}
