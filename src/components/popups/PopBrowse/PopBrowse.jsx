import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopBrowser.styled";
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../hooks/useTasks";
import { Navigate } from "react-router-dom";
import { useState } from "react";
// import { fetchDeleetTasc } from "../../../Api";

export default function PopBrowse() {
  const { id } = useParams();
  const { cards } = useTasks();
  const currentTask = cards.find((card) => id === card._id);
  const [selectedDate, setSelectedDate] = useState(currentTask.date);
  const [isEdit, setIsEdit] = useState(false);
  const [newTask, setNewTask] = useState({
    title: currentTask.title,
    description: currentTask.description,
    topic: currentTask.topic,
  });

  console.log(currentTask);
  if (!currentTask) {
    return <Navigate to={appRoutes.MAIN} />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  // const hendelTaskDeleet = async (e) => {
  //   e.preventDefult();
  //   await fetchDeleetTask({
  //     id,
  //     token: user.token,
  //   }).then((data) => {});
  // };

  return (
    <S.PopBrouwseStyled id="popBrowse">
      <S.PopBrouwseContainer>
        <S.PopBrouwseBlock>
          <S.PopBrouwseContent>
            <S.PopBrouwseTopBlock>
              <S.PopBrouwseTtl>
                Название задачи: {currentTask.title}
              </S.PopBrouwseTtl>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange"> {currentTask.topic}</p>
              </div>
            </S.PopBrouwseTopBlock>
            <S.Status>
              <p className="status__p subttl">Статус</p>
              {isEdit && (
                <S.StatusThemes>
                  <div className="status__theme ">
                    <p>Без статуса</p>
                  </div>
                  <div className="status__theme _gray">
                    <p className="_gray">Нужно сделать</p>
                  </div>
                  <div className="status__theme ">
                    <p>В работе</p>
                  </div>
                  <div className="status__theme ">
                    <p>Тестирование</p>
                  </div>
                  <div className="status__theme ">
                    <p>Готово</p>
                  </div>
                </S.StatusThemes>
              )}
            </S.Status>
            <S.PopBrouwseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="description"
                    id="textArea01"
                    // readOnly=""
                    value={newTask.description}
                    onChange={handleInputChange}
                    placeholder="Введите описание задачи..."
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrouwseWrap>
            <S.PopBrouwseBtnBrouwse>
              <div className="btn-group">
                <S.BtnBor onClick={() => setIsEdit(true)}>
                  Редактировать задачу
                </S.BtnBor>

                <S.BtnBor>Удалить задачу</S.BtnBor>
              </div>
              <Link to={appRoutes.MAIN}>
                <S.BtnBg>Закрыть</S.BtnBg>
              </Link>
            </S.PopBrouwseBtnBrouwse>
            <S.PopBrowseBtnEdit>
              <S.BtnGroup>
                <S.BtnBg>Сохранить</S.BtnBg>
                <Link to="#">
                  <S.BtnBor>Отменить</S.BtnBor>
                </Link>
                {/* <S.BtnBor onClick={hendelTaskDeleet}>Удалить задачу</S.BtnBor> */}
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
