import * as S from './styles'

export type Props = { active?: boolean; counter: number; label: string }

const CardFilter = ({ active, counter, label }: Props) => (
  <S.Card active={active}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{label}</S.Label>
  </S.Card>
)

export default CardFilter
