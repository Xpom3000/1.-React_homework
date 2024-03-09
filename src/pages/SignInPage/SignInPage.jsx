// import { useState } from "react";
import * as S from "./SigninPage.styled";

export default function SignIn() {
  // const (loginData, setLoginData) = useState({login:"", password:""})
  // const handleInputChange = (e) => {
  //     const { name, value } = e.target; // Извлекаем имя поля и его значение

  //     setFormData({
  //       ...loginData, // Копируем текущие данные из состояния
  //       [name]: value, // Обновляем нужное поле
  //     });
  // };
  // const handlerLogin = async() => {
  //     e.preventDefault();
  //     await signIn(logindata).then((data) => {
  //         console.loge(data)
  //     })
  // }
  return (
    <S.BodySignin>
      <S.Wrapper>
        <S.ContainerSignin>
          <S.Model>
            <S.ModalBlock>
              <S.ModelTtl>
                <h2>Вход</h2>
              </S.ModelTtl>
              <S.ModalFormLogin id="formLogIn" action="#">
                <S.ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter id="btnEnter">
                  <S.ModalBtnEnterA href="../main.html">Войти</S.ModalBtnEnterA>
                </S.ModalBtnEnter>
                <S.ModalFormGroup>
                  <S.ModalFormGroupAP>Нужно зарегистрироваться?</S.ModalFormGroupAP>
                  <S.ModalFormGroupA href="signup.html">Регистрируйтесь здесь</S.ModalFormGroupA>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Model>
        </S.ContainerSignin>
      </S.Wrapper>
    </S.BodySignin>
  );
}
