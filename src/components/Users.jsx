import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users=useLoaderData()
    const handleDelete=(_id)=>{
        console.log('del',_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    
    return (
        <div>
            <h1>User Collection:{users.length}</h1>
          {
            users.map(user=><p key={user._id}>{user.email} <button onClick={()=>handleDelete(user._id)}>X</button></p>)
          } 
        </div>
    );
};

export default Users;