import {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [changePassword, setChangePassword] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const submitForm = async (e: React.FormEvent) =>{
        e.preventDefault();

        if(password === confirmpassword){
            try {
                axios.post('https://654906b7dd8ebcd4ab241343.mockapi.io/Users',{
                    username,
                    email,
                    password
                });
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('email', email);
                navigate('/users/dashboard');
            } catch (error) {
                console.log(error);
            }
        }else{
            alert('Password not matched');
        }
        
    }


    const handleShowPassword = () => {
        setChangePassword(!changePassword);
    };
  return (
    <Container className='d-flex login-page justify-content-center align-items-center'>
        <Form className='shadow form-register' onSubmit={submitForm}>
            <h1 className='text-center pt-5 login-title'>Register</h1>
    
            <Form.Group className='mb-3 container'>
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Enter username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}    
                />
            </Form.Group>
    
            <Form.Group className='mb-3 container'>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type='email' 
                    placeholder='Enter email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </Form.Group>
    
            <Form.Group className=' container mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type={changePassword ? 'text': 'password'} 
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />
            </Form.Group>
    
            <Form.Group className=' container mb-3'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type={changePassword ? 'text': 'password'} 
                    placeholder='Enter password' 
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
            </Form.Group>

            <Form.Group className=' container mb-3'>
                <Form.Check type='checkbox' label="show password" onChange={handleShowPassword} placeholder='Enter phone number' />
                <Link to='/login' className='float-end mb-3'>Alredy Registered?</Link>
            </Form.Group>
    
            <Form.Group className='mb-3 container'>
                <Button variant='dark' type='submit' className='mb-3 container' >Submit</Button>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Register