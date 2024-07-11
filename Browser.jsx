import { Link, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopBrowse.styled";
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../hooks/useTasks";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { deleteTodo, editTodo } from "../../../Api";
import { useUser } from "../../../hooks/useUser";
import { CardTopic, TopicText } from "../../Cards/CardsItem/Card.styled";
import { statusList, topicHeader } from "../../../lib/topic";

export default function PopBrowse() {
  const { id } = useParams();
  const { cards, setCards, setIsLoading } = useTasks();
  const currentTask = cards.find((card) => id === card._id);
  const [selectedDate, setSelectedDate] = useState(currentTask.date);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  const handleEditTask = () => {
    setIsEdit(!isEdit);
  };

  const [newTask, setNewTask] = useState({
    title: currentTask.title,
    description: currentTask.description,
    topic: currentTask.topic,
  });

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

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
      token: user.token,
    };

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
              <CardTopic $themeColor={topicHeader[currentTask.topic]}>
                <TopicText $themeColor={topicHeader[currentTask.topic]}>
                  {currentTask.topic}
                </TopicText>
              </CardTopic>
            </S.PopBrouwseTopBlock>
            <S.Status>
              <p className="status__p subttl">Статус</p>
              {isEdit ? (
                statusList.map((el, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <S.StatusThemes>
                    <S.StatusTheme
                      type="radio"
                      id={`radio ${index}`}
                      name={"status"}
                      value={el}
                      onChange={handleInputChange}
                    ></S.StatusTheme>
                  </S.StatusThemes>
                ))
              ) : (
                <S.StatusP></S.StatusP>
              )}
            </S.Status>
            <S.PopBrouwseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              {isEdit ? (
                <Calendar
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              ) : (
                <Calendar
                  selectedDate={currentTask.date}
                  setSelectedDate={setSelectedDate}
                />
              )}
            </S.PopBrouwseWrap>
            <S.PopBrouwseBtnBrouwse>
              <S.BtnGroup>
                {isEdit ? (
                  <S.PopBrowseBtnEdit>
                    <S.BtnGroup>
                    <Link to={appRoutes.MAIN}>
                        <S.BtnBg onClick={handelFormSubmit}>Сохранить</S.BtnBg>
                        </Link>
                      <Link to={`/task/${id}`}>
                        <S.BtnBor >
                          Отменить
                        </S.BtnBor>
                      </Link>
                    </S.BtnGroup>
                  </S.PopBrowseBtnEdit>
                ) : (
                  <S.BtnBor onClick={handleEditTask}>
                    Редактировать задачу
                  </S.BtnBor>
                )}
                <S.BtnBor onClick={handleTaskDelete}>Удалить задачу</S.BtnBor>

                <Link to={appRoutes.MAIN}>
                  <S.BtnBg>Закрыть</S.BtnBg>
                </Link>
              </S.BtnGroup>
            </S.PopBrouwseBtnBrouwse>
          </S.PopBrouwseContent>
        </S.PopBrouwseBlock>
      </S.PopBrouwseContainer>
    </S.PopBrouwseStyled>
  );
}
