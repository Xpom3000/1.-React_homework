// import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../styled/common/Common.styled";
import * as S from "./SigninPage.styled";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { signIn } from "../../Api";

export default function SigninPage({ login }) {
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(loginData).then((data) => {
      login(data.user);
    });
  };
  return (
    <>
      <Wrapper>
        <S.ContainerSignin>
          <S.Model>
            <S.ModalBlock>
              <S.ModelTtl>
                <h2>Вход</h2>
              </S.ModelTtl>
              <S.ModalFormLogin id="formLogIn" action="#">
                <S.ModalInput
                  value={loginData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  value={loginData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter id="btnEnter" onClick={handleLogin}>
                  Войти
                </S.ModalBtnEnter>
                <S.ModalFormGroup>
                  <S.ModalFormGroupAP>
                    Нужно зарегистрироваться?
                  </S.ModalFormGroupAP>
                  <Link to={appRoutes.SIGNUP}>
                    <S.ModalFormGroupAP>
                      Регистрируйтесь здесь
                    </S.ModalFormGroupAP>
                  </Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Model>
        </S.ContainerSignin>
      </Wrapper>
    </>
  );
}
