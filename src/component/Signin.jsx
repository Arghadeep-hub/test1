import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function Signin({ setCookie }) {
    const route = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') return alert("Fill the Form Properly")
        console.log({ email, password });
        setCookie("user", true)
        route("/list-user")
        return
    }
    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
            <Row>
                <Col className="w-100">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Button type="submit" className="w-100">Sign in</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Signin