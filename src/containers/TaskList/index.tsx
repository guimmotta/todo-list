import Task from '../../components/Task'
import { Container } from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'Study TypeScript',
    description: 'Finish the Udemy TypeScript course',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.INPROGRESS
  },
  {
    title: 'We Go JIM',
    description: 'Finish the We Go JIM project',
    priority: enums.Priority.URGENT,
    status: enums.Status.DONE
  },
  {
    title: 'Pay the bills',
    description: 'Pay the electricity and water bills',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.INPROGRESS
  }
]

const TaskList = () => (
  <Container>
    <p>2 tasks tagged as &quot;category&quot; and &quot;term&quot;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
            title={t.title}
            description={t.description}
            priority={t.priority}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default TaskList
