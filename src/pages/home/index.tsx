import SideBar from '../../containers/SideBar'
import TaskList from '../../containers/TaskList'
import AddButton from '../../components/AddButton'

const Home = () => (
  <>
    <SideBar showFilters />
    <TaskList />
    <AddButton />
  </>
)

export default Home
