import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { Outlet } from "react-router-dom";
import { WrapperStyled } from "./MainPage.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../common/theme/lightTheme";
import { darkTheme } from "../../common/theme/darkTheme";
import { getTodos } from "../../Api";
import { useTasks } from "../../hooks/useTasks";
import { statusList } from "../../lib/topic";
import useUser from "../../hooks/useUser";
import Loader from "../../components/Loader/Loader";
// import { Loader} from "../../components/Loader/Loader.jsx"

export default function MainPage() {
  const [theme, setTheme] = useState("light");
  const { user } = useUser();
  const { cards, setCards } = useTasks();
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    getTodos({ token: user.token })
      .then((todos) => {
        setCards(todos.tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [setCards, user]);
  return (
    <>
      <WrapperStyled>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Outlet />
          <Header toggleTheme={toggleTheme} theme={theme} />
          {isLoading ? (
            <Loader />
          ) : (
            <MainContent>
              {statusList.map((status) => (
                <Column
                  title={status}
                  key={status}
                  cardList={cards.filter((card) => card.status === status)}
                />
              ))}
            </MainContent>
          )}
        </ThemeProvider>
      </WrapperStyled>
    </>
  );
}
