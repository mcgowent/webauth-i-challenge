import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios'

const LoginForm = () => {
    const [user, setUser] = useState({ username: '', password: '' })


    const apiCall = () => {
        axios
            .post('http://localhost:5000/api/auth/login', user, { withCredentials: true })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response));
    }

    const handleSubmit = () => {
        apiCall()
        setUser({ username: '', password: '' })
        console.log('Does the state Change', user)
    }

    const handleChange = (e, { name, value }) => {
        const { username, password } = user
        setUser({ ...user, [name]: value });
        console.log('Username:', username, 'Password:', password)
    }

    const { username, password } = user

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your account
      </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name="username" value={username} onChange={handleChange} />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />

                        <Button color='teal' fluid size='large'>
                            Login
          </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    )
}
export default LoginForm