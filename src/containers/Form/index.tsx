import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonSave, Field, MainContainer, Title } from '../../styles/'
import { Form, Options, Option } from './styles'
import * as enums from '../../utils/enums/Task'
import Task from '../../models/Task'
import { register } from '../../store/reducers/tasks'

const Forms = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()
    const taskToRegister = new Task(
      title,
      priority,
      enums.Status.INPROGRESS,
      description,
      1
    )
    dispatch(register(taskToRegister))
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>New Task</Title>
      <Form onSubmit={registerTask}>
        <Field
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Title"
        />
        <Field
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          id=""
          placeholder="task decription"
        />
        <Options>
          <p>priority</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <ButtonSave type="submit">Register</ButtonSave>
      </Form>
    </MainContainer>
  )
}

export default Forms
