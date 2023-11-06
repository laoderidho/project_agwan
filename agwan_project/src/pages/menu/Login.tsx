import {useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

  const [changePassword, setChangePassword] = useState(false);

  const handleShowPassword = () => {
    setChangePassword(!changePassword);
  };

  return (
    <Container className='d-flex login-page justify-content-center align-items-center'>
      <Form className='shadow form-login'>
        <h1 className='text-center pt-5 login-title'>Login</h1>

        <Form.Group className='mb-3 container'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' placeholder='Enter Email Adress' />
        </Form.Group>

        
        <Form.Group className=' container mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type={changePassword ? 'text': 'password'} placeholder='Enter username' />
        </Form.Group>

        <Form.Group className='container mb-5'>
          <Form.Check type='checkbox' label='Show Password' onChange={handleShowPassword} />
          <Link to='/register' className='float-end'>Register</Link>
        </Form.Group>

        <Form.Group className='mb-3 container'>
          <Button variant='dark' type='submit' className='mb-3 container'>Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;