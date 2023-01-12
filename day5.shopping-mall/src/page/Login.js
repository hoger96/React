import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate()
    const loginUser = (event) => {
        //로그인은 리프레시가 필요없어서 쓰는 함수(Form을 쓰면 꼭 쓰기)
        event.preventDefault();
        console.log("login function");
        setAuthenticate(true);
        navigate("/");
    };

  return (
    <Container>
        <Form onSubmit={(event) => loginUser(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
                로그인
            </Button>
        </Form>
    </Container>
  );
}

export default Login;