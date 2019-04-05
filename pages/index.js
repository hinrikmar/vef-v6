import React, { useState } from 'react';

import Layout from '../components/layout/Layout';
import Todos from '../components/todos/Todos';
import Button from '../components/button/Button';
import Form from '../components/form/Form';



import { getTodos,updateTodo, addTodo } from '../api';



let showAllData = true;
let prevData = [];
let text = "Fela búið"

function Home(props) {
  const { initialData } = props;
  

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  function onClickShowData() {
    if(showAllData){
      text = "Sýna allt"
      prevData = data;
      let temp = []

      for(let i = 0; i < data.length; i++){
        if(data[i].completed == false){
          temp.push(data[i])
        }
      }
      setData(temp);
      showAllData = false;

    }
    else{
      text = "Fela búið"
      setData(prevData);
      showAllData = true;
    }
  }
  
  async function onCreateCompleted(title, due, other) {
    setLoading(true);
    console.log("keyrir");
    const testDAta = await addTodo(title, due, other);
    console.log(testDAta)
    setLoading(false);
  }
  async function onUpdateCompleted(id, body,other) {
    setLoading(true);
    console.log("keyrir");
    await updateTodo(id, body,other);
    setLoading(false);
  }

  async function onFetchNewData(other) {
    setLoading(true);
    const newData = await getTodos(other);
    console.log(newData);
    setData(newData);
    setLoading(false);
  }

  return (
    <Layout title="Verkefni">
    
    <Button
    text = {text}
    onClick={onClickShowData}/>

      <Todos
        loading={loading}
        data={data}
        onFetchNewData={onFetchNewData}
        onUpdateCompleted={onUpdateCompleted}
      />
     <Form
      data={data}
      onCreateCompleted = {onCreateCompleted}
     />
    </Layout>
  );
}

Home.getInitialProps = async ({ req }) => {
  const data = await getTodos();
  console.log(data)
  return { initialData: data };
}


export default Home