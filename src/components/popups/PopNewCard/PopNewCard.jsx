import * as S from "./PopNewCard.styled";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PopNewCard() {
  const [newTask, setNewTask] = useState({
    title: " ",
    description: " ",
    topic: " ",
  });
  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log(newTask);
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
            <Link to={"*"}>
              {" "}
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
                  <input
                    className="form-new__input"
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
                  <textarea
                    className="form-new__area"
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar />
            </S.PopNewCardWrap>
            <div className="prod_checbox">
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
            </div>
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
            <button
              className="form-new__create _hover01"
              onClick={handelFormSubmit()}
              id="btnCreate"
            >
              Создать задачу
            </button>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}
