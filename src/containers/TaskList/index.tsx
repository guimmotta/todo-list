import Task from '../../components/Task'
import { Description } from '../../components/Task/styles'
import { Container } from './styles'

const tasks = [
  {
    title: 'Study TypeScript',
    description: 'Finish the Udemy TypeScript course',
    priority: 'Important',
    status: 'In-progress'
  },
  {
    title: 'We Go JIM',
    description: 'Finish the We Go JIM project',
    priority: 'Urgent',
    status: 'Done'
  },
  {
    title: 'Pay the bills',
    description: 'Pay the electricity and water bills',
    priority: 'Regular',
    status: 'In-progress'
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
