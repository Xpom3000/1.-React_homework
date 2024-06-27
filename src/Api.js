const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

//Получить список задач.
export async function getTodos({ token }) {
  const response = await fetch(baseHost, {
    metod: "GET",
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
export async function postTodo({ token, taskData }) {
  console.log(token, taskData);
  const response = await fetch(baseHost, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  if (!response.status === 201) {
    throw new Error("Ошибка, не удалось добавить задачу, попробуйте позже");
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

//Изменить задачу
export async function editTodo( {token , taskData, id}) {
  const response = await fetch(baseHost +`/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "PUT",
    body: JSON.stringify({
      title: taskData.title,
      topic: taskData.topic,
      status: taskData.status,
      description: taskData.description,
      date: taskData.date,
    }),
  });

  if (!response.status === 201) {
    throw new Error("Ошибка редактирования");
  }
  const data = await response.json();
  return data;
}

//Удалить задачу
export async function deleteTodo( {token , id}) {
  const response = await fetch(baseHost +`/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE"
  });

  if (!response.status === 201) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}





// //Удаление
// export async function fetchDeleetTask({ token, id }) {
//   const response = await fetch(baseHost + `/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   if (response.status === 400) {
//     throw new Error("Ошибка удаления");
//   }
//   const data = await response.json();
//   return data;
// }
