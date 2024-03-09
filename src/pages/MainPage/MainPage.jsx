import { useEffect, useState } from "react";
import { cardList } from "../../data";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { Outlet } from "react-router-dom";
import { WrapperStyled } from "./MainPage.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <>
      <WrapperStyled>
        {/* pop-up start*/}
        <Outlet />

        {/* pop-up end*/}
        <Header addCard={addCard} />
        {isLoading ? (
          "Загрузка..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <Column
                title={status}
                key={status}
                cardList={cardList.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </WrapperStyled>
    </>
  );
}
