import CardFilter from '../../components/CardFilter'

import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Search" />
      <S.Filters>
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default SideBar
