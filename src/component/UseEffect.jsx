import React from 'react'
import { useEffect, useState } from 'react';

const UseEffect = () => {
    const [ users, setUsers] = useState([]);
    const [ loading, setLoading] = useState(true);

      useEffect(()=>{
        const fetchUsers = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        };
        fetchUsers();
      }, []);

      if (loading) {
        return <p>Loading users...</p>
      }


  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user=>(

            <li key={user.id}>{user.name} ({user.email})</li>
        )

        )};
      </ul>
    </div>
  )
}

export default UseEffect
