export default class Validation {
  constructor(errors) {
    this.errors = errors;
  }

  validate(event) {
    const { nickname, password, link } = event.currentTarget.elements;
    if (
      !nickname.validity.valid ||
      !password.validity.valid ||
      !link.validity.valid
    ) {
      this.checkEmptyInput(event, nickname, password, link);
      this.checkRange(event, nickname, password, link);
      this.checkCorrectInput(event, nickname, password, link);
      this.checkLink(event, link);
      this.checkPassword(event, password);
      this.disableButton(event);
    } else {
      this.removeErrors(event);
      this.activateButton(event);
    }
  }

  //Проверка на пустое поле ввода
  checkEmptyInput(event, ...inputs) {
    if (event.target.value.length === 0) {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(
            `#${input.name}`
          ).textContent = this.errors.ru.emptyInput;
        }
      });
    }
  }

  //Проверка диапазона поля ввода
  checkRange(event, ...inputs) {
    if (event.target.value.length === 1 || event.target.value.length > 30) {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(
            `#${input.name}`
          ).textContent = this.errors.ru.outOfRange;
        }
      });
    }
  }

  //Проверка корректного значения в поле ввода
  checkCorrectInput(event, ...inputs) {
    if (event.target.validity.valid) {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(
            `#${input.name}`
          ).textContent = this.errors.correctInput;
        }
      });
    }
  }

  //Проверка ссылки
  checkLink(event, ...inputs) {
    if (!event.target.validity.valid && event.target.value.length === 0) {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(
            `#${input.name}`
          ).textContent = this.errors.ru.emptyInput;
        }
      });
    } else if (
      !event.target.validity.valid &&
      (event.target.name === "link" || event.target.name === "avatar")
    ) {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(
            `#${input.name}`
          ).textContent = this.errors.ru.invalidLink;
        }
      });
    }
  }

  //Проверка пароля
  checkPassword(event, input) {
    if (event.target.value.length === 1) {
      if (event.target.name === input.name) {
        document.querySelector(
          `#${input.name}`
        ).textContent = this.errors.ru.password;
      }
    }
  }

  //Удаление ошибок
  removeErrors(event) {
    event.currentTarget.querySelectorAll(".error").forEach(error => {
      error.textContent = "";
    });
  }

  //Отключение кнопки формы
  disableButton(event) {
    const button = event.currentTarget.querySelector("button");
    button.setAttribute("disabled", true);
    button.classList.add("button_disabled");
    button.classList.remove("button_active");
  }

  //Включение кнопки формы
  activateButton(event) {
    const button = event.currentTarget.querySelector("button");
    button.removeAttribute("disabled");
    button.classList.remove("button_disabled");
    button.classList.add("button_active");
  }
}
