import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { logIn } from '../../actions/LoginAction'
import PropTypes from 'prop-types'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    isAuthorized: PropTypes.bool,
    error: PropTypes.string,
    logIn: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    this.props.logIn({
      username,
      password
    });
  }

  render() {
    const { username, password } = this.state;
    const { isAuthorized, error } = this.props;

    if (isAuthorized) {
      return <Redirect to='/' />;
    }
    
    return (
      <Form onSubmit={this.handleSubmit} className="form">
        <Alert color="danger" isOpen={Boolean(error)} >
          {error}
        </Alert>

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

const mapStateToProps = (state) => (
  {
    isAuthorized: Boolean(state.username),
    error: state.errorMsg
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logIn: (params) => dispatch(logIn(params)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
