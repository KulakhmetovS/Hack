import axios from 'axios';
import {useState} from 'react';


const SendToServer = (inputLogin, inputPassword, e) => {

  e.preventDefault();
  axios.post('https://jsonplaceholder.typicode.com/users', {
    login: {inputLogin},
    password: {inputPassword},
  }).then(function(response){console.log(response.data)})
}

export default SendToServer;
