import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import classes from "./AuthForm.module.css";
import axios from 'axios';
import Main from '../../pages/Main';

const AuthForm = ({title}) => {

  const [inputLogin, setLogin] = useState('');
  const [inputPassword, setPassword] = useState('');
  var ID;

  const SendToServer = (e) => {

    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: {inputLogin},
      usrname: {inputPassword},
    }).then(function(response) {ID = response.data.id; ReactDOM.render(<Main identifier={ID}/>, document.getElementById('app'));})
    .catch(function(response) {
      if (response.error) {
        alert('Ошибка авторизации');
      }
    })
  }

    return (
        <form className={classes.AuthForm}>
            <div className={classes.AuthForm__header}>{title}</div>

            <div className={classes.AuthForm__inputs}>
                <input className={classes.AuthFormInput} value={inputLogin} onChange={e => setLogin(e.target.value)} placeholder="Почта/Логин" type="text"/>
                <input className={classes.AuthFormInput} value={inputPassword} onChange={e => setPassword(e.target.value)} placeholder="Пароль" type="text"/>
            </div>

            <div className={classes.AuthForm__buttons}>
                <button type="submit" onClick={SendToServer} className={classes.button_submit}>Войти</button>
                <a className={classes.urlButton} href="">Зарегистрироваться</a>
            </div>
        </form>
    );
};

export default AuthForm;
