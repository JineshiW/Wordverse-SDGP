// import Container from "@/components/Shared/Container";
import React, { useState } from "react";
// import Link from "next/link";
import { useFormik } from "formik"; // Formik is a form library for React
import * as Yup from "yup"; // Yup is a JavaScript schema builder for value parsing and validation
import axios from "axios"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/router";
// import { isEmpty } from "@/utils/utils";
import { Link } from "react-router-dom";
import { isEmpty } from "../../service/utils";
import { Container } from "@mui/material"; // Material-UI Container component
import NavbarLogin from "./Navbar"; // Navbar component for login page
import { addAPI } from "../../service/api"; // API function to add data


// Validation schema for login form fields
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});


// Login page component
const LoginPage = () => {
  // const router = useRouter();

  // Function to handle login data submission
  const RegisterData = (obj, resetForm) => {
    addAPI("auth/login", obj) // Send login data to the backend API
      .then((resp) => {
        localStorage.setItem("userData", JSON.stringify(resp.data));
        console.log(resp.data, "000000");
        toast.success("Successfully Added!");
        window.location.href = "/";
        resetForm(); // Reset form fields
        setLoading(false); // Disable loading state
      })
      .catch((err) => toast.error("Invalid credentials."), setLoading(false));
  };

  const [Loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
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
      //   localStorage.setItem(
      //     "userData",
      //     JSON.stringify(response.data.result)
      //   );
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
          Login
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
              </div>
              <button
                type="submit"
                className="px-4 py-2 mt-10 text-white bg-blue-900 rounded-md "
                disabled={Loading}
                style={{ background: "#01959a" }}
              >
                {Loading ? "Loading ..." : "Login"}
              </button>
            </div>
          </form>
        </div>

        <div className="py-3 text-sm pe-2">
          Already haven't a account
          <Link
            id="comments-description"
            className="text-[#7E7A7C] ps-1"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
