import * as S from "./PopNewCard.styled";
import Calendar from "../../Calendar/Calendar";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { postTodo } from "../../../Api";
import { Link } from "react-router-dom";
import { useTasks } from "../../../hooks/useTasks";
import useUser from "../../../hooks/useUser";

export default function PopNewTask() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { setCards } = useTasks();
  const [selectedDate, setSelectedDate] = React.useState(null); //Состояне для сохранениЯ даты
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const handelFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
      token: user.token,
      
    };

    await postTodo({ taskData, token: user.token })
      .then((data) => {
        setCards(data.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        // console.log(error);
        alert(error.message);
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
              <S.PopNewNardClose>Х</S.PopNewNardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm
                className="form-new"
                id="formNewCard"
                action="#"
              >
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle" >
                    Название задачи
                  </S.Subttl>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    value={newTask.title}
                    // onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.Subttl htmlFor="textArea" >
                    Описание задачи
                  </S.Subttl>
                  <S.FormNewArea
                    name="description"
                    value={newTask.description}
                    // onChange={handleInputChange}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    autoFocus=""
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}
              />
            </S.PopNewCardWrap>
            <S.ProdChecbox>
              <div className="radio-toolbar">
                <S.RadioToolbarInputW
                  type="radio"    
                  id="radio1"
                  name="topic"
                  value="Web Design"
                  onChange={handleInputChange}
                />
                <S.RadioToolbarLabelW htmlFor="radio1">Web Design</S.RadioToolbarLabelW>
                <S.RadioToolbarInputR
                  type="radio"
                  id="radio2"
                  name="topic"
                  value="Research"
                  onChange={handleInputChange}
                />
                <S.RadioToolbarLabelR htmlFor="radio2">Research</S.RadioToolbarLabelR>
                <S.RadioToolbarInputC
                  type="radio"
                  id="radio3"
                  name="topic"
                  value="Copywriting"
                  onChange={handleInputChange}
                />
                <S.RadioToolbarLabelC htmlFor="radio3">Copywriting</S.RadioToolbarLabelC>
              </div>
            </S.ProdChecbox>
            <S.FormNewCreate onClick={handelFormSubmit} id="btnCreate">
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}
