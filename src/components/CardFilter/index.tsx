import { useDispatch, useSelector } from 'react-redux'
import { changeFilterCriteria } from '../../store/reducers/filters'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  label: string
  criteria: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ label, criteria, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const isActive = () => {
    const sameCriteria = filter.criteria === criteria
    const sameValue = filter.value === value

    return sameCriteria && sameValue
  }

  const CountTasks = () => {
    if (criteria === 'all') return tasks.itens.length
    if (criteria === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criteria === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
    return 0
  }
  const toFilter = () => {
    dispatch(
      changeFilterCriteria({
        criteria,
        value
      })
    )
  }

  const counter = CountTasks()
  const active = isActive()

  return (
    <S.Card active={active} onClick={toFilter}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default CardFilter
