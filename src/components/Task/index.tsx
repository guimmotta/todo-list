import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/Task'

import { removeTask } from '../../store/reducer/Tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ title, priority, status, description, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.Actions>
        {isEditing ? (
          <>
            <S.buttonSave>Save</S.buttonSave>
            <S.buttonCancelDelete onClick={() => setIsEditing(false)}>
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
