import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { GlobalContext } from '../context/GlobalState';

export default function EditUser() {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });
    const { users, editUser } = useContext(GlobalContext)
    const navigatge = useNavigate();
    const currentUserId = useParams();
    
    useEffect(() => {
        const userId = currentUserId.id;
        const foundUser = users.find(user => String(user.id) === userId)
        setSelectedUser(foundUser);
    },[currentUserId, users])
      
    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser)
        navigatge('/')
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input placeholder='Edit Name...' 
                name="name"
                value={selectedUser.name} 
                onChange={onChange} 
                />
            </FormGroup>
            <Button type='submit'>Edit Name</Button>
            <Link to='/' className='btn btn-danger ms-2'>Cancel</Link>
        </Form>
    )
}
