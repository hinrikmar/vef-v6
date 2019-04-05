import React, { useState, useEffect } from 'react';
import Error from 'next/error';

import Layout from '../components/layout/Layout';
import TodoDetail from '../components/todo-detail/TodoDetail';

import { getTodo,updateTodo,deleteTodo } from '../api';

function Home(props) {
  const { id, initialData } = props;
  

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  async function onUpdateCompleted(body,other) {
    setLoading(true);
    console.log("keyrir");
    await updateTodo(id, body,other);
    setLoading(false);
  }

  async function onDeleteCompleted(other) {
    setLoading(true);
    console.log("keyrir");
    await deleteTodo(id,other);
    setLoading(false);
  }

  async function onFetchNewData(other) {
    setLoading(true);
    const newData = await getTodo(id, other);
    console.log(newData);
    setData(newData);
    setLoading(false);
  }


  return (
    <Layout title="Klára verkefni 4">
    <TodoDetail
      loading={loading}
      data={data}
      onFetchNewData={onFetchNewData} 
      onUpdateCompleted={onUpdateCompleted}
      onDeleteCompleted={onDeleteCompleted}
    />
    </Layout>
  );
}
Home.getInitialProps = async ({ query }) => {
  const { id } = query;

  const data = await getTodo(id);

  return {id,initialData: data}
}

export default Home
