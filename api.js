/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */
import 'isomorphic-fetch';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export async function deleteTodo(id) {
  console.log("virkar");
}

export async function addTodo(title, due) {
  
}

export async function updateTodo(id, { title, completed, due } = {}) {
  
}

export async function getTodos(hideCompleted = undefined) {

    const url = new URL(``, apiUrl);
    console.log('fetch', url.href);
    const response = await fetch('http://127.0.0.1:3000/');
    if (!response.ok) {
      return null;
    }
  
    return response.json();
}
  

export async function getTodo(id) {
  
}
