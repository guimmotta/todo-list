import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles/'

import { RootReducer } from '../../store'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criteria, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let filteredTasks = itens
    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criteria === 'priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (criteria === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    } else {
      return itens
    }
  }

  const showFilterResults = (amount: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `and "${term}"` : ''
    if (criteria === 'all') {
      message = `${amount} task(s) tagged as: "all" ${complement}`
    } else {
      message = `${amount} task(s) tagged as: "${`${criteria}=${value}`}" ${complement}`
    }
    return message
  }

  const tasks = filterTasks()
  const message = showFilterResults(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              title={t.title}
              description={t.description}
              priority={t.priority}
              status={t.status}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default TaskList
