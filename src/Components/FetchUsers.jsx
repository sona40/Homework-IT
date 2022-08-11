import { useEffect, useState } from "react";


 function FetchUsers() {
    const [users, setUsers] = useState([]);
    
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((json) => {setUsers(json)})
      .catch(err => {
        console.log(err)
      })
  }, []);
  
  return (
    <div>
      <ul>
        {users.map(user => ( 
          <li key = {user.id}>{user. title}</li>       
        ))}
      </ul>


    </div>
  )
}
export default FetchUsers
