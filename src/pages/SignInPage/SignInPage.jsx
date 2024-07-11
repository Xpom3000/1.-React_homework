import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../styled/common/Common.styled";
import * as S from "./SigninPage.styled";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { signIn } from "../../Api";
import useUser from "../../hooks/useUser";


export default function SigninPage() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [regBtnLoading, setRegBtnLoading] = useState(false);
  const [regFormError, setRegFormError] = useState(null);
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await signIn(loginData).then((data) => {
        login(data.user);
        navigate(appRoutes.MAIN);
      })
    } catch (error) {
      setRegFormError(error.message);
    } finally {
      setRegBtnLoading(false);
    }
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
                  placeholder="Логин"
                />
                <S.ModalInput
                  value={loginData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter id="btnEnter" onClick={handleLogin}
                disabled={regBtnLoading}
                style={{backgroundColor: regBtnLoading ? "#94A6BE" : "#565EEF",
                }}>
                  Войти
                </S.ModalBtnEnter>
                <p style={{ color: "red" }}>{regFormError}</p>
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
