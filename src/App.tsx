import SideBar from './containers/SideBar'
import TaskList from './containers/TaskList'
import StyleGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <StyleGlobal />
      <Container>
        <SideBar />
        <TaskList />
      </Container>
    </>
  )
}

export default App
