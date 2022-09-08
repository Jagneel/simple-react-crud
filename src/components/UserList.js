import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'

export default function UserList() {
    const { users, deleteUser, editUser } = useContext(GlobalContext)
    console.log(users)
    return (
        <ListGroup>
            {users.map(user => (
                <ListGroupItem className='d-flex justify-content-between mt-3'>
                    <strong>{user.name}</strong>
                    <div className="ml-auto">
                        <Link to={`/editUser/${user.id}`} className='btn btn-warning mr-1' onClick={() => editUser(user.name)}>Edit</Link>
                        <Button color='danger ms-2' onClick={() => deleteUser(user.id)}>Delete</Button>
                    </div>
                </ListGroupItem>

            ))}
        </ListGroup>
    )
}
