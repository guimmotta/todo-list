import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { setFilterTerm } from '../../store/reducers/filters'
import * as enums from '../../utils/enums/Task'

import * as S from './styles'
import { Button, Field } from '../../styles'

type Props = {
  showFilters?: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Field
              type="text"
              placeholder="Search"
              value={term}
              onChange={(event) => dispatch(setFilterTerm(event.target.value))}
            />
            <S.Filters>
              <CardFilter
                value={enums.Status.INPROGRESS}
                criteria="status"
                label="In-progress"
              />
              <CardFilter
                value={enums.Status.DONE}
                criteria="status"
                label="Done"
              />
              <CardFilter
                value={enums.Priority.HIGH}
                criteria="priority"
                label="High"
              />
              <CardFilter
                value={enums.Priority.NORMAL}
                criteria="priority"
                label="Normal"
              />
              <CardFilter
                value={enums.Priority.LOW}
                criteria="priority"
                label="Low"
              />
              <CardFilter criteria="all" label="All" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')} type="button">
            Go back to TaskList
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
