import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import SigninPage from "./pages/SignInPage/SignInPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute";
import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import { GlobalStyle } from "./common/GlobalStyle.styled";
import "./App.css";
// import NewCardPage from "./pages/NewCardPage/NewCardPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivatRoute />}>
          <Route path={appRoutes.MAIN} element={<MainPage  />}>
            <Route path={appRoutes.TASK} element={<TaskPage />} />
            {/* <Route path={appRoutes.NEW_CARD} element={<NewCardPage />} /> */}
            <Route path={appRoutes.EXIT} element={<ExitPage/>} />
          </Route>
        </Route>
        <Route path={appRoutes.SIGNIN} element={<SigninPage  />} />
        <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
        <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
}
