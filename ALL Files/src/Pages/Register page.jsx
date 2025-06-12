// RegistrationPage.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../style/LoginPage.css" // Optional: for advanced CSS (I'll provide below)

const RegistrationPage = () => {
  const initialValues = {
    name: '',
    email: '',
    address: '',
    dob: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    address: Yup.string().required('Required'),
    dob: Yup.date().required('Required').nullable(), // Add nullable() to allow empty string
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Registration Data:', values);
    setTimeout(() => {
      alert('Registration Successful!');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {/* Name */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                      />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <Field
                        as="textarea"
                        name="address"
                        id="address"
                        className="form-control"
                        rows="2"
                      />
                      <ErrorMessage name="address" component="div" className="text-danger" />
                    </div>

                    {/* DOB */}
                    <div className="mb-3">
                      <label htmlFor="dob" className="form-label">Date of Birth</label>
                      <Field
                        type="date"
                        name="dob"
                        id="dob"
                        className="form-control"
                      />
                      <ErrorMessage name="dob" component="div" className="text-danger" />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Create Password</label>
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
                      {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
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

export default RegistrationPage;

