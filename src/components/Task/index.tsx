import * as S from './styles'

const Task = () => (
  <S.Card>
    <S.Title>Task Title</S.Title>
    <S.Tag>important</S.Tag>
    <S.Tag>Pending</S.Tag>
    <S.Description />
    <S.Actions>
      <S.Button>Edit</S.Button>
      <S.Button>Delete</S.Button>
    </S.Actions>
  </S.Card>
)

export default Task
