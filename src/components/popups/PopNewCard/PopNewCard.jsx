import * as S from "./PopNewCard.styled";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUser } from "../../../hooks/useUser";
import { postTodo } from "../../../Api";
import { Link } from "react-router-dom";
import { useTasks } from "../../../hooks/useTasks";

export default function PopNewTask() {
  const { user } = useUser();
  const { setCards } = useTasks();
  const [selectedDate, setSelectedDate] = useState(null); //Состояне для сохранениЯ даты
  const [newTask, setNewTask] = useState({
    title: " ",
    description: " ",
    topic: " ",
  });
  const handelFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
    }
    console.log(taskData);

    postTodo({ taskData, token: user.token })
      .then((data) => {
        console.log(data);
        setCards(data.tasks);
        Navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        // console.log(error);
        alert(error);
        // setError(error.message)
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={appRoutes.MAIN}>
              <S.PopNewNardClose>&#10006;</S.PopNewNardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm
                className="form-new"
                id="formNewCard"
                action="#"
              >
                <S.FormNewBlock>
                  <label htmlFor="formTitle" className="subttl">
                    {" "}
                    Название задачи
                  </label>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormNewArea
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopNewCardWrap>
            <S.ProdChecbox>
              <div className="radio-toolbar">
                <input
                  type="radio"
                  id="radio1"
                  name="topic"
                  value="Web Design"
                  onChange={handleInputChange}
                />
                <label htmlFor="radio1">Web Design</label>

                <input
                  type="radio"
                  id="radio2"
                  name="topic"
                  value="Research"
                  onChange={handleInputChange}
                />
                <label htmlFor="radio2">Research</label>

                <input
                  type="radio"
                  id="radio3"
                  name="topic"
                  value="Copywriting"
                  onChange={handleInputChange}
                />
                <label htmlFor="radio3">Copywriting</label>
              </div>
            </S.ProdChecbox>
            {/* <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div> */}
            <S.FormNewCreate onClick={handelFormSubmit} id="btnCreate">
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}
