/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */
import 'isomorphic-fetch';
import getConfig from 'next/config';
import { isNull } from 'util';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export async function deleteTodo(id) {
  const url = new URL(id,apiUrl);
  console.log('fetch', url.href);
  const response = await fetch(url.href, {method: 'DELETE'})
  if (!response.ok) {
    return null;
  }

  return response.json();
}


export async function addTodo(title, due) {

  const url = new URL(apiUrl);
 
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  
  
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',                                                              
      body: JSON.stringify({ "title":title, "due":due })                                        
    })

  if (!response.ok) {
    throw new Error(response.statusText);
  }
 
  return response.json();
}

export async function updateTodo(id, json = {}) {
  console.log('patch');
  const fields = json;
  const url = new URL(id, apiUrl);
  //console.log('patch id', id, ' title ', title, ' completed ', completed);

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',                                                              
    body: JSON.stringify( fields )                                        
  })

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getTodos(hideCompleted = undefined) {

    const url = new URL(apiUrl);
    console.log('fetch', url.href);
    const response = await fetch(url.href);
    if (!response.ok) {
      return null;
    }
  
    return response.json();
}
  

export async function getTodo(id) {
  const url = new URL(id,apiUrl);
  console.log('fetch', url.href);
  const response = await fetch(url.href);
  if (!response.ok) {
    return null;
  }

  return response.json();
}
