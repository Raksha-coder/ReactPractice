

const LoopInJsxMap = () => {

 const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    isActive: true
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 34,
    isActive: false
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    age: 22,
    isActive: true
  },
  {
    id: 4,
    name: "Diana Evans",
    email: "diana@example.com",
    age: 45,
    isActive: false
  },
  {
    id: 5,
    name: "Ethan Brown",
    email: "ethan@example.com",
    age: 31,
    isActive: true
  }
];


  return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>IsActive</th>
                </tr>
            </thead>
            <tbody>
                {
                users.map((users) => (
                    <tr key={users.id}>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.age}</td>
                        <td>
                            {users.isActive}
                        </td>
                    </tr>
                ))
                }
         
            </tbody>
        </table>
    </div>
  )
}

export default LoopInJsxMap
