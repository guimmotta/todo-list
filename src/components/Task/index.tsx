import * as S from './styles'
import { useState } from 'react'
import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description?: string
}

const Task = ({ title, priority, status, description }: Props) => {
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
            <S.buttonCancelDelete>Delete</S.buttonCancelDelete>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Task
