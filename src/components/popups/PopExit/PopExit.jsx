import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopExit.styled"


export default function PopExit({ logout }) {
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtlH2>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtlH2>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <Link to={appRoutes.SIGNIN}>
                <S.PopExitExitYes onClick={logout} id="exitYes">
                  Да, выйти
                </S.PopExitExitYes>
              </Link>
              <Link to={appRoutes.MAIN}>
                <S.PopExitExitNo id="exitNo">
                  Нет, остаться
                </S.PopExitExitNo>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
