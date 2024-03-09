<>
  signup.html
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../css/signup.css" />
  {/* <link rel="stylesheet" href="../css/signup_dark.css"> */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,200;8..144,300;8..144,400;8..144,700;8..144,800;8..144,900&family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <title>Skypro</title>
  <div className="wrapper">
    <div className="container-signup">
      <div className="modal">
        <div className="modal__block">
          <div className="modal__ttl">
            <h2>Регистрация</h2>
          </div>
          <form className="modal__form-login" id="formLogUp" action="#">
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
            <button className="modal__btn-signup-ent _hover01" id="SignUpEnter">
              <a href="../main.html">Зарегистрироваться</a>{" "}
            </button>
            <div className="modal__form-group">
              <p>
                Уже есть аккаунт? <a href="signin.html">Войдите здесь</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>
