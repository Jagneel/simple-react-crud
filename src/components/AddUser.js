import {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {v4 as uuid} from 'uuid'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export default function AddUser() {
    const { addUser } = useContext(GlobalContext)
    const navigage = useNavigate();
    const [name, setName] = useState('');

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        navigage('/')
        addUser(newUser)
        
    }

    const onChange = (e) => {
        setName(e.target.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input value={name} onChange={onChange}></Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to='/' className='btn btn-danger ms-2'>Cancel</Link>
        </Form>
    )
}
