import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopBrowser.styled";
import Calendar from "../../Calendar/Calendar";

export default function PopBrowse() {
  const { id } = useParams();
  return (
    <S.PopBrouwseStyled id="popBrowse">
      <S.PopBrouwseContainer>
        <S.PopBrouwseBlock>
          <S.PopBrouwseContent>
            <S.PopBrouwseTopBlock>
              <S.PopBrouwseTtl>Название задачи: {id}</S.PopBrouwseTtl>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </S.PopBrouwseTopBlock>
            <S.Status>
              <p className="status__p subttl">Статус</p>
              <S.StatusThemes>
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </S.StatusThemes>
            </S.Status>
            <S.PopBrouwseWrap>
              <S.PopBrowseForm
                id="formBrowseCard"
                action="#"
              >
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01" >
                    Описание задачи
                  </S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar />
            </S.PopBrouwseWrap>
            <S.PopBrouwseBtnBrouwse>
              <div className="btn-group">
                <Link to="#">
                  <S.BtnBor>Редактировать задачу</S.BtnBor>
                </Link>
                <Link to="#">
                  <S.BtnBor>Удалить задачу</S.BtnBor>
                </Link>
              </div>
              <Link to={appRoutes.MAIN}>
                <S.BtnBg>Закрыть</S.BtnBg>
              </Link>
            </S.PopBrouwseBtnBrouwse>
            <S.PopBrowseBtnEdit>
              <S.BtnGroup>
                <Link to="#">
                  <S.BtnBg>Сохранить</S.BtnBg>
                </Link>
                <Link to="#">
                  <S.BtnBor>Отменить</S.BtnBor>
                </Link>
                <Link to="#">
                  <S.BtnBor id="btnDelete">Удалить задачу</S.BtnBor>
                </Link>
              </S.BtnGroup>
              <Link to="#">
                <S.BtnBg>Закрыть</S.BtnBg>
              </Link>
            </S.PopBrowseBtnEdit>
          </S.PopBrouwseContent>
        </S.PopBrouwseBlock>
      </S.PopBrouwseContainer>
    </S.PopBrouwseStyled>
  );
}
