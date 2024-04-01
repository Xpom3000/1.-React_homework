import { Container } from "../../styled/common/Common.styled";
import * as S from "./MainContent.styled";

export default function MainContent({ children }) {
  return (
    <S.StyleMain>
      <Container>
        <S.MainBlock>
          <S.StyledMainContenet>{children}</S.StyledMainContenet>
        </S.MainBlock>
      </Container>
    </S.StyleMain>
  );
}
