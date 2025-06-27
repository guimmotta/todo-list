import Task from '../../components/Task'

import { Container } from './styles'

const TaskList = () => (
  <Container>
    <p>2 tasks tagged as &quot;category&quot; and &quot;term&quot;</p>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </Container>
)

export default TaskList
