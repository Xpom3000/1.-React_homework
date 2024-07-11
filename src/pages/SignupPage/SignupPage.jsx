import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { Wrapper } from "../../styled/common/Common.styled";
import * as S from "./SignupPage.styled";
import { useState } from "react";
import { signUp } from "../../Api";
import useUser from "../../hooks/useUser";


export default function SignupPage() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [regBtnLoading, setRegBtnLoading] = useState(false);
  const [regFormError, setRegFormError] = useState(null);
  const [registerData, setRegisterData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setRegisterData({
      ...registerData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const handleLogup = async (e) => {
    try {
      e.preventDefault();
      setRegBtnLoading(true);
      await signUp(registerData).then((data) => {
        console.log(data)
        login(data.user);
        navigate(appRoutes.MAIN);
      });
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
                  value={registerData.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  value={registerData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  value={registerData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <S.ModalBtnSignupEnter
                  id="SignUpEnter"
                  onClick={handleLogup}
                  disabled={regBtnLoading}
                  style={{
                    backgroundColor: regBtnLoading ? "#94A6BE" : "#565EEF",
                  }}
                >
                  <Link to={appRoutes.MAIN}>
                    <S.ModalBtnSignupEnterA>
                      Зарегистрироваться
                    </S.ModalBtnSignupEnterA>
                  </Link>
                </S.ModalBtnSignupEnter>
                <p style={{ color: "red" }}>{regFormError}</p>
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
