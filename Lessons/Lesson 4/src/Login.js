import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
        <form>
            <fieldset class="login">
                <label class="login__lb">Логин: </label>
                <input type="text" class="login__name"></input>
                <label class="login__lb">Пароль: </label>
                <input type="password" class="login__pass"></input>
                <button class="login__btn">Войти</button>
            </fieldset>
        </form>
    );
  }
}

