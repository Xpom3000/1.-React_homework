import { useEffect, useState } from "react";
import "./App.css";
import NewCardPage from "./pages/NewCardPage/NewCardPage";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage
} from "./common/Common";

export default function App() {
    // let [user, setUser] = useState(null);
  let [user, setUser] = useState();
   user = getFromLocalStorage();
  const navigate = useNavigate();

  function login(newUser) {
    setUser(newUser);
    saveToLocalStorage(newUser);
    navigate(appRoutes.MAIN);
  }
  function logout() {
    setUser(null);
    removeFromLocalStorage();
    navigate(appRoutes.SIGNIN);
  }
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivatRoute user={user} />}>
          <Route path={appRoutes.MAIN} element={<MainPage user={ user} />}>
            <Route path={appRoutes.TASK} element={<TaskPage />} />
            <Route path={appRoutes.NEW_CARD} element={<NewCardPage />} />
            <Route
              path={appRoutes.EXIT}
              element={<ExitPage logout={logout} />}
            />
          </Route>
        </Route>
        <Route path={appRoutes.SIGNIN} element={<SigninPage login={login} />} />
        <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
        <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
