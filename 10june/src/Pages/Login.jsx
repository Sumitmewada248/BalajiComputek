// LoginPage.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import "../style/LoginPage.css"; // Optional: for advanced CSS (you can create this file)
const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Login Data:', values);
    setTimeout(() => {
      alert('Login Successful!');
      setSubmitting(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                      />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                      {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>

                    <p className='mt-3 text-center'></p>
                      Don't have an account? <Link to="/register">Register here</Link>
                  </Form>
                )}
              </Formik>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

