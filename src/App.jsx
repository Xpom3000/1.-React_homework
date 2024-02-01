import './App.css';
import Column from './components/Column/Column';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopExit from './components/popups/PopExit/PopExit';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';

function App() {
  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
        <PopExit/>
        <PopNewCard/>
        <PopBrowse/>
        {/* pop-up end*/}
            
        <Header />
        <MainContent>
          <Column title={"Без статуса"} />
          <Column title={"Нужно сделать"} />
          <Column title={"В работе"} />
          <Column title={"Теститрование"} />
          <Column title={ "Готово"} />
        </MainContent >
          
      </div>
    </>
  )
}

export default App
