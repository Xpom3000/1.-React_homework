import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { Wrapper } from "../../styled/common/Common.styled";
import * as S from "./SignupPage.styled";

export default function SignupPage() {
  return (
    <>
      <Wrapper>
        <S.ContainerSignup>
          <S.Model>
            <S.ModalBlock>
              <S.ModelTtl>
                <h2>Регистрация</h2>
              </S.ModelTtl>
              <S.ModalFormLogin id="formLogUp" action="#">
                <S.ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <Link to={appRoutes.SIGNIN}>
                  <S.ModalBtnSignupEnter id="SignUpEnter">
                    <S.ModalBtnSignupEnterA>
                      {" "}
                      Зарегистрироваться
                    </S.ModalBtnSignupEnterA>
                  </S.ModalBtnSignupEnter>
                </Link>
                <S.ModalFormGroup>
                  <S.ModalFormGroupAP>Уже есть аккаунт?</S.ModalFormGroupAP>
                  <Link to={appRoutes.SIGNIN}>
                    <S.ModalFormGroupAP>Войдите здесь</S.ModalFormGroupAP>
                  </Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Model>
        </S.ContainerSignup>
      </Wrapper>
    </>
  );
}
