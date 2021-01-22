import React, { useReducer } from 'react';
import { usersReducer } from './UsersReducer';

const init = () => {
    return [
        {
            id: new Date().getTime(),
            name : 'juan',
            age: 30
        }
    ];
}


export const UsersApp = () => {


    const [users, dispatch] = useReducer( usersReducer, [], init)

   
    const handleAdd = (e) => {
        e.preventDefault();
        const name = document.querySelector('.name').value;
        const age = document.querySelector('.age').value;

        const newUser = {
            id: new Date().getTime(),
            name,
            age
        }

        //action
        const action = {
            type: 'ADD',
            payload: newUser
        }

        //disptach
        dispatch( action );

        document.getElementById('form').reset();
    }

    return (
        <>
            <h1>Práctica useReducer !!!</h1>
            <ul>
                {users.map( (user) => (
                    <li key={user.id}>{user.name} {user.age}</li>
                ))}
            </ul>
            <form id="form" onSubmit={ handleAdd }>
                <input className="form form-control name" name="name" placeholder="name"/>
                <input className="form form-control age" name="age" placeholder="age"/> 
                <button className="btn btn-outline-dark"
                        type="submit"
                >Add User</button>
            </form>
        </>
    )
}
