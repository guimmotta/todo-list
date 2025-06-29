import { Provider } from 'react-redux'
import SideBar from './containers/SideBar'
import TaskList from './containers/TaskList'
import StyleGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <Container>
        <SideBar />
        <TaskList />
      </Container>
    </Provider>
  )
}

export default App
