import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from "../../context/Auth.context"
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const password_confirmRef = useRef()
  const usernameRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (password_confirmRef.current.value !== passwordRef.current.value) {
      return setError("Passwords do not match")
    }
    if (!usernameRef.current.value) return setError("Username is required")
    try {
      setError("")
      setLoading(true)
      const user = await signup(
        emailRef.current.value,
        passwordRef.current.value
      )
      fetch("http://localhost:3000/user/register", {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          username: usernameRef.current.value,
          user_id: user.user.uid
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("username", data.username)
          navigate("/")
        })
    } catch (error) {
      setError("Failed to create an account")
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
            <h2 className="text-center mb-4">Sign up</h2>
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
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  ref={usernameRef}
                  placeholder="Your username"
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
              <br />
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={password_confirmRef}
                  placeholder="Confirm password"
                />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
