import { Link, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopBrowse.styled";
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../hooks/useTasks";
// import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteTodo, editTodo } from "../../../Api";
import { CardTopic, TopicText } from "../../Cards/CardsItem/Card.styled";
import { statusList, topicHeader } from "../../../lib/topic";
import useUser from "../../../hooks/useUser";

export default function PopBrowse() {
  const { id } = useParams();
  const { cards, setCards } = useTasks();
  const currentTask = cards.find((card) => id === card._id);
  const [selectedDate, setSelectedDate] = useState(currentTask.date);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  // const [isLoading, setIsLoading] = useState(true);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
    status: "",
  });

  useEffect(() => {
    if (cards.length) {
      // const currentTask = cards.find((card) => id === card._id);
        if (!currentTask) {
          return navigate(appRoutes.MAIN);
        }
        setNewTask({
          ...newTask,
          title: currentTask.title || "",
          description: currentTask.description ||"",
          topic: currentTask.topic ||"",
          status: currentTask.status || "",
          date: currentTask.date || "",
        });
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение
    console.log(name, value);
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

    await editTodo({ token: user.token, taskData, id})
      .then((todos) => {
        console.log(todos.tasks);
        setCards(todos.tasks);
        // setIsLoading(false);
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
                Название задачи: {newTask.title}
              </S.PopBrouwseTtl>
              <CardTopic $themeColor={topicHeader[newTask.topic]}>
                <TopicText $themeColor={topicHeader[newTask.topic]}>
                  {newTask.topic}
                </TopicText>
              </CardTopic>
            </S.PopBrouwseTopBlock>
            <S.Status>
              <p className="status__p subttl">Статус</p>
              {isEdit ? (
                <S.StatusThemes>
                  {statusList.map((status) => (
                    <S.StatusTheme key={status}
                      // checked={status === newTask.status}
                    >
                      <S.StatusThemesInput
                        type="radio"
                        id="radio"
                        name="status"
                        value={status}
                        onChange={handleInputChange}
                      />
                      <S.StatusThemeP>{status}</S.StatusThemeP>
                    </S.StatusTheme>
                  ))}
                </S.StatusThemes>
              ) : (
                <S.StatusThemes>
                  <S.StatusTheme>
                    <S.StatusThemeS >{newTask.status}</S.StatusThemeS>
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
              {isEdit ? (
                <S.PopBrowseBtnEdit>
                  <S.BtnGroup>
                    <Link to={appRoutes.MAIN}>
                      <S.BtnBg onClick={handleFormSubmit}>Сохранить</S.BtnBg>
                    </Link>
                    <S.BtnBor onClick={() => navigate(appRoutes.MAIN)}>
                      Отменить
                    </S.BtnBor>
                    <S.BtnBor onClick={handleTaskDelete}>
                      Удалить задачу
                    </S.BtnBor>
                  </S.BtnGroup>
                </S.PopBrowseBtnEdit>
              ) : (
                <S.BtnGroup>
                  <S.BtnBor onClick={() => setIsEdit(true)}>
                    Редактировать задачу
                  </S.BtnBor>
                  <S.BtnBor onClick={handleTaskDelete}>Удалить задачу</S.BtnBor>
                </S.BtnGroup>
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
