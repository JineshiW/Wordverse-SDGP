// Import necessary modules and components
import React, { useState } from "react";
import { useFormik } from "formik"; // Form handling library
import * as Yup from "yup"; // Validation library
import axios from "axios"; // HTTP client library
import { toast } from "react-toastify"; // Notification library
import "react-toastify/dist/ReactToastify.css"; 
import { Link } from "react-router-dom"; // For routing
import { isEmpty } from "../../service/utils";
import { Container } from "@mui/material";
import NavbarLogin from "./Navbar"; // Custom navbar component
import { addAPI } from "../../service/api"; // API service function

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("LastName is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  cpassword: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password")], "Passwords should match"),
});

// Define RegisterPage component
const RegisterPage = () => {
  // const router = useRouter();

  // Function to handle registration data submission
  const RegisterData = (obj, resetForm) => {
    // Call API service function to add user data
    addAPI("auth", obj)
      .then((resp) => {
        // Display success message using toast
        toast.success("Successfully Registered!");
        // Redirect to login page after successful registration
        window.location.href = "/login";
        // Reset form fields
        resetForm();
        // Set loading status to false
        setLoading(false);
      })
      .catch((err) => toast.error("Something went wrong."), setLoading(false));
  };

  const [Loading, setLoading] = useState(false);

  // Form handling using useFormik hook
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      
      // Call RegisterData function to handle registration
      RegisterData(values, resetForm);
      // try {
      //   // Perform the API request (replace the URL with your actual API endpoint)
      //   const response = await axios.post(
      //     "http://localhost:3000/api/auth/login",
      //     values
      //   );
      //   console.log(response);

      //   // Handle success
      //   if (!isEmpty(response.data.result)) {
      //     toast.success("Register successfully");
      //     localStorage.setItem(
      //       "userData",
      //       JSON.stringify(response.data.result)
      //     );
      //   } else {
      //     toast.error("email or password incorrect");
      //   }
      // } catch (error) {
      //   // Handle error
      //   console.error("Error submitting data:", error);

      //   // Display error message (you can use a toast library or another UI element)
      //   toast.error("Error Register data. Please try again.");
      // } finally {
      //   setLoading(false);
      // }
    },
  });

   // Return JSX for the RegisterPage component
  return (
    <div className="w-full bg-white rounded-xl">
      <NavbarLogin />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <div
        className="text-center p-4 border rounded-sm"
        style={{
          maxWidth: "400px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <h1 className="text-2xl font-bold text-slate-800 uppercase">
          Register
        </h1>

        <div className="w-full h-full p-5 rounded">
          <form onSubmit={formik.handleSubmit}>
            <div
              className="flex flex-col justify-between h-full text-slate-500"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <div className="mt-5 space-y-2">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-[#ebedeb] w-full text-sm py-3 px-3 rounded ${
                    formik.touched.firstName &&
                    formik.errors.firstName &&
                    "border-red"
                  }`}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-sm text-start ps-2">
                    {formik.errors.firstName}
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-[#ebedeb] w-full text-sm py-3 px-3 rounded ${
                    formik.touched.lastName &&
                    formik.errors.lastName &&
                    "border-red"
                  }`}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-500 text-sm text-start ps-2">
                    {formik.errors.lastName}
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-[#ebedeb] w-full text-sm py-3 px-3 rounded ${
                    formik.touched.email && formik.errors.email && "border-red"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm text-start ps-2">
                    {formik.errors.email}
                  </div>
                )}

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-[#ebedeb] w-full text-sm py-3 px-3 rounded ${
                    formik.touched.password &&
                    formik.errors.password &&
                    "border-red"
                  }`}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm text-start ps-2">
                    {formik.errors.password}
                  </div>
                )}
                <input
                  type="password"
                  placeholder="cPassword"
                  name="cpassword"
                  value={formik.values.cpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-[#ebedeb] w-full text-sm py-3 px-3 rounded ${
                    formik.touched.cpassword &&
                    formik.errors.cpassword &&
                    "border-red"
                  }`}
                />
                {formik.touched.cpassword && formik.errors.cpassword && (
                  <div className="text-red-500 text-sm text-start ps-2">
                    {formik.errors.cpassword}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="px-4 py-2 mt-10 text-white bg-blue-900 rounded-md "
                disabled={Loading}
                style={{ background: "#01959a" }}
              >
                {Loading ? "Loading ..." : "Register"}
              </button>
            </div>
          </form>
        </div>

        <div className="py-3 text-sm pe-2">
          Already have a account
          <Link
            id="comments-description"
            className="text-[#7E7A7C] ps-1"
            to="/login"
          >
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; // Export RegisterPage component
