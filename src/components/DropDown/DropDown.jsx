import { useContext, useEffect, useState } from "react";
import * as S from "./DropDown.styled.js";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import useUser from "../../hooks/useUser";
import { GlobalContext } from "../../contexts/GlobalContext.jsx";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const { theme, themeSwitchHandler } = useContext(GlobalContext);
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
  
      <S.HeaderNav>
        <S.HeaderBtnMainNew>
          <Link to={appRoutes.NEWTASK}>Создать новую задачу</Link>
        </S.HeaderBtnMainNew>
        <S.HeaderUser onClick={toggleDropdown}>{user.name}</S.HeaderUser>
        {isOpen && (
          <S.HeaderPopUserSet className="pop-user-set" id="user-set-target">
            <S.PopUserSetName>{user.name}</S.PopUserSetName>
            <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
            <S.PopUserSetTheme>
              <p>Темная тема</p>
              <input
                type="checkbox"
                onChange={() =>
                  themeSwitchHandler(theme === "dark" ? "light" : "dark")
                }
              />
            </S.PopUserSetTheme>
            <button type="button">
              <Link to={appRoutes.EXIT}>Выйти</Link>
            </button>
          </S.HeaderPopUserSet>
        )}
    </S.HeaderNav>
    





    
  );
}
