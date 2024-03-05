import { useState } from "react";
import * as S from "./Header.styled.";
import { Container } from "../../styled/common/Common.styled";


export default function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  return (
    <S.StyleHeader>
      <Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="../images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="../images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <button
              onClick={addCard}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              Создать новую задачу
            </button>
            <div onClick={togglePopup} className="header__user _hover02">
              Ivan Ivanov
            </div>
            {isOpened && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                {/* <a href="">x</a> */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyleHeader>
  );
}
