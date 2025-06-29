import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { removeTask, editTask } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({
  title,
  priority,
  status,
  description: originalDescription,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  const cancelEdit = () => {
    setIsEditing(false)
    setDescription(originalDescription)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.Actions>
        {isEditing ? (
          <>
            <S.buttonSave
              onClick={() => {
                dispatch(
                  editTask({
                    title,
                    priority,
                    status,
                    description,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Save
            </S.buttonSave>
            <S.buttonCancelDelete onClick={() => cancelEdit()}>
              Cancel
            </S.buttonCancelDelete>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Edit</S.Button>
            <S.buttonCancelDelete onClick={() => dispatch(removeTask(id))}>
              Delete
            </S.buttonCancelDelete>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Task
