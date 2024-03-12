import { useEffect, useState } from "react";
import { cardList } from "../../data";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { Outlet } from "react-router-dom";
import { WrapperStyled } from "./MainPage.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../common/theme/lightTheme";
import { darkTheme } from "../../common/theme/darkTheme";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

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
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Outlet />

          {/* pop-up end*/}
          <Header addCard={addCard} toggleTheme={toggleTheme} theme={theme} />
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
        </ThemeProvider>
      </WrapperStyled>
    </>
  );
}
