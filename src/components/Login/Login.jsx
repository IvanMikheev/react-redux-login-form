import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css'

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  
  }


  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.username, this.state.password);

  }


  render() {
    const { username, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className="form">
        <FormGroup>
          <Label for="username">Логин</Label>
          <Input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Пароль</Label>
          <Input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </FormGroup>
        <Button color="secondary" type="submit">Подтвердить</Button>
      </Form>
    )
  }
}

export default Login
