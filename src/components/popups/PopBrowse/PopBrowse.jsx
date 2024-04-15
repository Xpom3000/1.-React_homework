import { Link, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopBrowser.styled";
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../hooks/useTasks";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { deleteTodo, editTodo } from "../../../Api";
import { useUser } from "../../../hooks/useUser";
import { CardTopic } from "../../Cards/CardsItem/Card.styled";
import { topicHeader } from "../../../lib/topic";

export default function PopBrowse() {
  const { id } = useParams();
  const { cards, setCards, setIsLoading } = useTasks();
  const currentTask = cards.find((card) => id === card._id);
  const [selectedDate, setSelectedDate] = useState(currentTask.date);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    console.log({ taskData });

    await editTodo({ token: user.token, taskData })
      .then((todos) => {
        console.log(todos.tasks);
        setCards(todos.tasks);
        setIsLoading(false);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleTaskDelete = async (e) => {
    e.preventDefault();
    await deleteTodo({ token: user.token, id })
      .then((todos) => {
        console.log("После удаления задачи список: " + todos.tasks);
        setCards(todos.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <S.PopBrouwseStyled id="popBrowse">
      <S.PopBrouwseContainer>
        <S.PopBrouwseBlock>
          <S.PopBrouwseContent>
            <S.PopBrouwseTopBlock>
              <S.PopBrouwseTtl>
                Название задачи: {currentTask.title}
              </S.PopBrouwseTtl>
              <div className="categories__theme theme-top _active-category">
                <CardTopic $themeColor={topicHeader[currentTask.topic]}>
                  {currentTask.topic}
                </CardTopic>
              </div>
            </S.PopBrouwseTopBlock>
            <S.Status>
              <p className="status__p subttl">Статус</p>
              {isEdit && (
                <S.StatusThemes>
                  <S.StatusTheme>
                    <p>Без статуса</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <S.Gray>Нужно сделать</S.Gray>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <p>В работе</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <p>Тестирование</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <p>Готово</p>
                  </S.StatusTheme>
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
              <S.BtnGroup>
                <S.BtnBor onClick={() => setIsEdit(true)}>
                  Редактировать задачу
                </S.BtnBor>
                <S.BtnBor onClick={handleTaskDelete}>Удалить задачу</S.BtnBor>
              </S.BtnGroup>
              {isEdit && (
                <S.PopBrowseBtnEdit>
                  <S.BtnGroup>
                    <S.BtnBg onClick={handleFormSubmit}>Сохранить</S.BtnBg>
                    <Link to="#">
                      <S.BtnBor onClick={navigate(appRoutes.MAIN)}>
                        Отменить
                      </S.BtnBor>
                    </Link>
                    {/* <S.BtnBor onClick={hendelTaskDeleet}>Удалить задачу</S.BtnBor> */}
                  </S.BtnGroup>
                </S.PopBrowseBtnEdit>
                  )}
              
                 <Link to={appRoutes.MAIN}>
                 <S.BtnBg>Закрыть</S.BtnBg>
                </Link>
            
            </S.PopBrouwseBtnBrouwse>
          </S.PopBrouwseContent>
        </S.PopBrouwseBlock>
      </S.PopBrouwseContainer>
    </S.PopBrouwseStyled>
  );
}
