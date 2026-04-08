import React, { useEffect, useState } from 'react'

function Users() {
    // api call
    // components lifecycle -> mounting, updating, unmounting

    // Syntax
    // useEffect(() => { // mount
    //      -- api logic // updating
        // }, []) -- unmounting

        const[users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/users").then((response) => {
            return response.json();
        }).then((data) => {
            setUsers(data);
        })
    }, []);

    console.log(users);

  return (
    <div>
        {
            users.map(data => (
                <p>{data.username}</p>
            ))
        }
    </div>
  )
}

export default Users