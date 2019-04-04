import React, { useState } from 'react';

import Layout from '../components/layout/Layout';
import Todos from '../components/todos/Todos';
import Button from '../components/button/Button';
import Form from '../components/form/Form';



import { getTodos } from '../api';

function Home(props) {
  const { initialData } = props;

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  async function onFetchNewData(other) {
    setLoading(true);
    const newData = await getTodos(other);
    setData(newData);
    setLoading(false);
  }

  return (
    <Layout title="Verkefni">
      <Button>
          fela búið
      </Button>
      <Todos
        loading={loading}
        data={data}
        onFetchNewData={onFetchNewData}
      />
      
     <Layout title="Nýtt verkefni"/>
     <Form/>
      <Button>
          Búa til
      </Button>
    </Layout>
  );
}

Home.getInitialProps = async ({ req }) => {
  const data = await getTodos();
  console.log(data);
  return { initialData: data };
}

export default Home