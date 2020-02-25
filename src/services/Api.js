//Пример Api

//url https://v2-api.sheety.co/a5ef5d923274b26c584a4e108ade8c58
//path /panzer/players

export default class Api {
  constructor() {
    this.url = 'https://v2-api.sheety.co/a5ef5d923274b26c584a4e108ade8c58/panzer/players';
  }

  //GET
  // Получаем массив объектов
  async get() {
    const res = await fetch(`${this.url}`);
    return await res.json();
  }

  //POST
  //Добавялем нового игрока в базу
  post(login, password, avatar, score) {
    return fetch(`${this.url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        player: {
          login,
          password,
          avatar,
          score
        }
      })
    }).then(this.checkStatus)
      .catch(this.showError);
  }

  //PUT
  //Обновляем информацию об игроке, необходимо указать ячейку игрока
  // например /panzer/players/3
  put(num, login, password, avatar, score) {
    return fetch(`${this.url}/${num}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        player: {
          login,
          password,
          avatar,
          score
        }
      })
    })
      .then(this.checkStatus)
      .catch(this.showError);
  }

  //DELETE
  //Удаляем игрока из базы, также нужно указать номер ячейки игрока
  //которого хотим удалить
  delete(event, num) {
    return fetch(`${this.url}/${num}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        player: {
          login: event.currentTarget.elements.login.value,
          password: event.currentTarget.elements.password.value,
          avatar: event.currentTarget.elements.avatar.value,
          score: event.currentTarget.elements.score.value
        }
      })
    })
      .then(this.checkStatus)
      .catch(this.showError);
  }
}
