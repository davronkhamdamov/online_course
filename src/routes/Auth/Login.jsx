import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from "../../context/Auth.context"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      const user = await login(
        emailRef.current.value,
        passwordRef.current.value
      )
      fetch("http://localhost:3000/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          user_id: user.user.uid
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          localStorage.setItem("username", data.username)
          navigate("/")
        })
    } catch (error) {
      setError("Failed to log in")
    }
    setLoading(false)
  }
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ width: "450px" }}>
        <Card>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <h2 className="text-center mb-4">Log In</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  placeholder="Your email"
                />
              </Form.Group>
              <br />
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Your password"
                />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forget-password">Forget Password</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account?<Link to="/signup"> Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
