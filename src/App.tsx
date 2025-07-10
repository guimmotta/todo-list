import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StyleGlobal, { Container } from './styles'

import store from './store'
import Home from './pages/home'
import Register from './pages/register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
