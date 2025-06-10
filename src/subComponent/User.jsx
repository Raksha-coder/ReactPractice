
const User = ({users}) => {
  return (
    <div>
        <ol>
            <ul>{users.id}</ul>
            <ul>{users.name}</ul>
            <ul>{users.email}</ul>
            <ul>{users.age}</ul>
            <ul>{users.age}</ul>
            <ul>{users.isActive}</ul>
        </ol>
    </div>
  )
}

export default User
