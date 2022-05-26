import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import GoogleButton from "react-google-button";
// import 'bootstrap/dist/css/bootstrap.css';
export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login,googleSignIn } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      // history.push("/")
      history("/")

    } catch(err) {
      // setError("Failed to log in")
      setError(err.message)

    }

    setLoading(false)
  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      history("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert data-testid='error' variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" data-testid="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control data-testid="password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} data-testid='submit' id='btnLogin' className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="mx-auto my-3 ">
            <GoogleButton className='g-btn mx-auto ' type='dark'  onClick={handleGoogleSignIn}/>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
