import CardFilter from '../../components/CardFilter'

import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Search" />
      <S.Filters>
        <CardFilter label="In-progress" counter={1} />
        <CardFilter label="Done" counter={2} />
        <CardFilter label="Urgent" counter={3} />
        <CardFilter label="Important" counter={4} />
        <CardFilter label="Regular" counter={5} />
        <CardFilter active label="All" counter={10} />
      </S.Filters>
    </div>
  </S.Aside>
)

export default SideBar
