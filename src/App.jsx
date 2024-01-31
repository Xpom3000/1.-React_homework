import "./App.css";
import Column from "../App.jsx/components/Collumn/Column";
import Header from "../App.jsx/components/Header/Header";
import MainContent from "../App.jsx/components/MainContent/MainContent";
import PopBrowser from "../App.jsx/components/popups/PopBrowse/PopBrowse";
import PopExit from "../App.jsx/components/popups/PopExit/PopExit";
import PopNewCard from "../App.jsx/components/popups/PopNewCard/PopNewCard";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowser />
        {/* pop-up end*/}

        <Header />
        <MainContent>
          <Column title={"Без статуса"} />
          <Column title={"Нужно сделать"} />
          <Column title={"В работе"} />
          <Column title={"Тестирование"} />
          <Column title={"Готово"} />
        </MainContent>
      </div>
    </>
  );
}

export default App;
