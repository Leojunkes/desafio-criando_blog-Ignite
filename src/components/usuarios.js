
export default function Users({user}){
    return(
        <>
        <h1>Cadastros</h1>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Nome</th>
      <th>Telefone</th>
      <th>Email</th>
      <th>Endereço1</th>
      <th>Endereço2</th>
      <th>Endereço2</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{user.id}</td>
      <td>
        <strong>{user.name}</strong>
      </td>

      <td>
        <strong>{user.telefone}</strong>
      </td>
      <td>
        <strong>{user.email}</strong>
      </td>
      <td>
        <strong>{user.endereço1}</strong>
      </td>
      <td>
        <strong>{user.endereço2}</strong>
      </td>
      <td>
        <strong>{user.endereço3}</strong>
      </td>
      <td className={styles.trash}>
        <FiTrash size={16} />
      </td>
    </tr>
  </tbody>
  </table>
  </>
    )
}