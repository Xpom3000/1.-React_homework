const basaHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user"; 

// export const setToken = (user) => {
//   const token = user ? `Bearer ${user.token}` : undefined;
//   return token;
// };

//Получить список задач.
export async function getTodos({token}) {
  const response = await fetch(basaHost, {
    metod: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

//Добавить задачу в список.
export async function postTodo({token, text}) {
  const response = await fetch(basaHost, {
    headers: {
      Authorisation:  `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({text})
  });
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

//РЕГИСТРАЦИЯ
export function signUp({ login, name, password }) {
  return fetch(userHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  });
}

//АВТОРИЗАЦИЯ
export function signIn({ login, password }) {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}
