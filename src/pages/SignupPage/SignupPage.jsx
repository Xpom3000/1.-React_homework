import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { Wrapper } from "../../styled/common/Common.styled";
import * as S from "./SignupPage.styled";

export default function SignupPage() {
  return (
    <Wrapper>
      <S.ContainerSignup>
        <S.Model>
          <S.ModalBlock>
            <S.ModelTtl>
              <h2>Регистрация</h2>
            </S.ModelTtl>
            <S.ModalFormLogin id="formLogUp" action="#">
              <input
                className="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <Link to={appRoutes.SIGNIN}>
                <S.Hover01 id="SignUpEnter">
                  Зарегистрироваться
                </S.Hover01>
              </Link>
              <S.ModalFormGroup>
                <S.ModalFormGroupAP>
                  Уже есть аккаунт?
                  <Link to={appRoutes.SIGNIN}>
                    Войдите здесь
                  </Link>
                </S.ModalFormGroupAP>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Model>
      </S.ContainerSignup>
    </Wrapper>
  );
}
