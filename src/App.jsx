import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import SigninPage from "./pages/SignInPage/SignInPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute";
import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import  "./App.css"

export default function App() {
  const [user, setUser] = useState(true);

  return (
    <Routes>
      <Route element={<PrivatRoute user={user} />}>
        <Route path={MainPage} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
