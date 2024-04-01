// Сохраняем данные об объекте User в localStorage
export function saveToLocalStorage(user) {
  window.localStorage.setItem("user", JSON.stringify(user));
}
// Достаем данные  объекта User из localStorage
export function getFromLocalStorage() {
  try {
    return JSON.parse(window.localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}
// Удаляем данные об объекте User из localStorage
export function removeFromLocalStorage() {
  window.localStorage.removeItem("user");
}

// export const handleInputChange = (e) => {
//   const { name, value } = e.target; // Извлекаем имя поля и его значение

//   setLoginData({
//     ...loginData, // Копируем текущие данные из состояния
//     [name]: value, // Обновляем нужное поле
//   });
// };
