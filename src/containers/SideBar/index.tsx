import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { setFilterTerm } from '../../store/reducer/filters'

import * as S from './styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Search"
          value={term}
          onChange={(event) => dispatch(setFilterTerm(event.target.value))}
        />
        <S.Filters>
          <CardFilter label="In-progress" counter={1} />
          <CardFilter label="Done" counter={2} />
          <CardFilter label="High" counter={3} />
          <CardFilter label="Normal" counter={4} />
          <CardFilter label="Low" counter={5} />
          <CardFilter active label="All" counter={10} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
