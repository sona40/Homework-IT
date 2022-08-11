import { useEffect, useState } from "react";


export default function FetchUsers() {
    const [users, setUsers] = useState([]);
    
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((json) => {setUsers(json)});
  }, []);
  
  return (
    <div>
      <ul>
        {users.map(user => ( 
          <li key = {user.id}></li>
        ))}
      </ul>


    </div>
  )
}
