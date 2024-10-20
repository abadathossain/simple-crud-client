import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers=useLoaderData()
    const [users, setUsers]=useState(loadedUsers)
    const handleDelete=(_id)=>{
        console.log('del',_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remaining=users.filter(user=>user._id !==_id)
            setUsers(remaining)
        })


    }

    
    return (
        <div>
            <h1>User Collection:{users.length}</h1>
          {
            users.map(user=><p key={user._id}>{user.email}{user._id}
            <Link to={`/update/${user._id}`}><button>Update</button></Link>
             <button onClick={()=>handleDelete(user._id)}>X</button></p>)
          } 
        </div>
    );
};

export default Users;