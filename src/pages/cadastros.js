import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './cadastro.module.scss';
import { FiTrash } from 'react-icons/fi';
import { AuthContext } from './utils/contextCadastro';

import Users from '../components/usuarios';
import api from './api';


export default function Cadastros() {
  const { user} = React.useContext(AuthContext);
  const [users, setUsers] = useState([])

  useEffect(() => {
    api
      .get("/users")
      .then(function (res) {
        setUsers(res.data);
      })
      .catch(console.log);
  }, []);
       


  return (
    <>
      <Head>
        <title>Cadastros | X-Solar</title>
      </Head>
      <div className={styles.containerGeral}>
        {
          users.map((user)=>(
            <Users key={user.id} user={user}/>
          ))
        }
              
        
      </div>
    </>
  );
}
