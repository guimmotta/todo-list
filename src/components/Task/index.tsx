import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { removeTask, editTask, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { Button, ButtonSave } from '../../styles'

import * as enums from '../../utils/enums/Task'

type Props = TaskClass

const Task = ({
  title,
  $priority,
  $status,
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

  function changeTaskStatus(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, done: event.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={$status === enums.Status.DONE}
          onChange={changeTaskStatus}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag $parameter="priority" $priority={$priority}>
        {$priority}
      </S.Tag>
      <S.Tag $parameter="status" $status={$status}>
        {$status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.Actions>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  editTask({
                    title,
                    $priority,
                    $status,
                    description,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Save
            </ButtonSave>
            <S.buttonCancelDelete onClick={() => cancelEdit()}>
              Cancel
            </S.buttonCancelDelete>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
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
