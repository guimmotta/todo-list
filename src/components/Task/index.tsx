import * as S from './styles'
import { useState } from 'react'

type Props = {
  title: string
  priority: string
  status: string
  description?: string
}

const Task = ({ title, priority, status, description }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag>{priority}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Description value={description} />
      <S.Actions>
        {isEditing ? (
          <>
            <S.Button>Save</S.Button>
            <S.Button onClick={() => setIsEditing(false)}>Cancel</S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Edit</S.Button>
            <S.Button>Delete</S.Button>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Task
