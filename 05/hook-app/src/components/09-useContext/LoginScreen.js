import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    //usar el context
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button className="btn btn-primary"
             onClick={ () => setUser({
                id: 12345,
                name: 'Fernando'
            })}
            >
                Login
            </button>
        </div>
    )
}
