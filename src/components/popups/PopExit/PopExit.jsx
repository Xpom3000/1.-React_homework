import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopExit.styled";
import useUser from "../../../hooks/useUser";

export default function PopExit() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtlH2>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtlH2>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitExitYes
                onClick={() => {
                  logout();
                  navigate(appRoutes.SIGNIN);
                }}
                id="exitYes"
              >
                Да, выйти
              </S.PopExitExitYes>
              <Link to={appRoutes.MAIN}>
                <S.PopExitExitNo id="exitNo">Нет, остаться</S.PopExitExitNo>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
