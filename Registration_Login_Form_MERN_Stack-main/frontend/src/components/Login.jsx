// Import necessary dependencies and styles

import 'bootstrap/dist/css/bootstrap.min.css'; //  imports Bootstrap CSS for styling purposes

import { useState } from 'react'; // This React hook is used to add state to functional components. It allows components to manage and update their own state.

import { Link } from "react-router-dom"; // This package provides routing capabilities for React applications. It enables navigation between different components/pages within the application.

import axios from 'axios'; // Axios is used here for sending HTTP requests to the server.

import { useNavigate } from 'react-router-dom'; // This hook is used for programmatic navigation within a React application


// Define the Login component

const Login = () => {

    // Define state variables for email, password, and navigation

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    // Define function to handle form submission

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Send a POST request to the server with email and password data

        axios.post( 'http://localhost:3001/login', {email, password}) 
        .then(result => {
            console.log(result); // Log results to the console

            // If the server responds with "Success", redirect to the home page

            if(result.data === "Success"){
                console.log("Login Success"); // Log success message to the console
                alert('Login successful!') // Show the login success message to the user
                navigate('/home'); // Redirect to the home page
            }
            else{
                alert('Incorrect password! Please try again.'); // If the server responds with anything else, display an error message
            }
        }) 
        // Handle errors that occur during the request
        .catch(err => {
            console.error('Error during login:', err); // Log the error to the console
            alert('An error occurred during login. Please try again later.'); // Show an error message to the user
        }); 
    }

// Render the Login component
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage: "linear-gradient(to right, #000080, #000000)", color: "white"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3 text-primary'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    {/* TO add ' appostopee */}
                    <p className='container my-2'>Don&apos;t have an account?</p>
                    <Link to='/register' className="btn btn-secondary">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login