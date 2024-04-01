import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { Wrapper } from "../../styled/common/Common.styled";
import * as S from "./SignupPage.styled";
import { useState } from "react";
import { signUp } from "../../Api";

export default function SignupPage({ setUser }) {
  const navigate = useNavigate();
  const [logupData, setLogupData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLogupData({
      ...logupData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const [regBtnLoading, setRegBtnLoading] = useState(false);
  const [regFormError, setRegFormError] = useState(null);
  const handleLogup = async (e) => {
    try {
      e.preventDefault();
      setRegBtnLoading(true);
      const regUser = await signUp({
        login: logupData.login,
        name: logupData.name,
        password: logupData.password,
      });
      setUser(regUser.user);
      alert("Пользователь успешно создан");
      navigate(appRoutes.HOME);
    } catch (error) {
      setRegFormError(error.message);
    } finally {
      setRegBtnLoading(false);
    }
  };

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
                  value={logupData.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  value={logupData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Логин"
                />
                <S.ModalInput
                  value={logupData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                {/* <Link to={appRoutes.SIGNIN}> */}
                <S.ModalBtnSignupEnter
                  id="SignUpEnter"
                  onClick={handleLogup}
                  disabled={regBtnLoading}
                  style={{
                    backgroundColor: regBtnLoading ? "#94A6BE" : "#565EEF",
                  }}
                ><Link to={appRoutes.MAIN}>
                  <S.ModalBtnSignupEnterA>
                    Зарегистрироваться
                    </S.ModalBtnSignupEnterA>
                    </Link>
                </S.ModalBtnSignupEnter>
                <p style={{ color: "red" }}>{regFormError}</p>
                {/* </Link> */}
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
