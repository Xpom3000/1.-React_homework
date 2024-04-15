import { useState } from "react";
import * as S from "./Header.styled.";
import { Container } from "../../styled/common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const { user } = useUser();
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  return (
    <S.StyleHeader>
      <Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <Link to="" target="_self">
              <img src="../images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="header__logo _dark">
            <Link to="" target="_self">
              <img src="../images/logo_dark.png" alt="logo" />
            </Link>
          </div>
          <S.HeaderNav>
            <Link to={appRoutes.NEWTASK}>
              <S.HeaderBtnMaynNew id="btnMainNew">
                Создать новую задачу
              </S.HeaderBtnMaynNew>
            </Link>
            <S.HeaderUser onClick={togglePopup}>{user.name} </S.HeaderUser>
            {isOpened && (
              <S.HeaderPopUseSet id="user-set-target">
                <S.PopUseSetName>{user.name}</S.PopUseSetName>
                <S.PopUseSetMail>{user.login}</S.PopUseSetMail>
                <S.PopUseSetTheme>
                  <S.PopUseSetThemeP >Темная тема</S.PopUseSetThemeP>
                  <S.Checkbox  type="checkbox" name="checkbox" />
                </S.PopUseSetTheme>
                <Link to={appRoutes.EXIT}>
                  <S.Hover03 type="button">Выйти</S.Hover03>
                </Link>
              </S.HeaderPopUseSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyleHeader>
  );
}
