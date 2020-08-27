import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image de um átomo e React Avançado ao lado."
    />
    <S.Title>React Avançado - Boilerplate</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styeld Components!
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Pessoa desenvolvendo código de programação no computador"
    />
  </S.Wrapper>
)

export default Main
