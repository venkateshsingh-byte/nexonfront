'use client';

import { useState } from "react";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BASE_URL from '../config/base_url';

const FILE_SIZE = 5 * 1024 * 1024; // 2MB
const SUPPORTED_FORMATS = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const validationSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  phone: Yup.string()
    .matches(/^[0-9\b]+$/, 'Invalid phone number')
    .required('Phone Number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  upload_cv: Yup.mixed()
    .required('Please upload your CV')
    .test('fileSize', 'File is too large (max 2MB)', value => {
      return value && value.size <= FILE_SIZE;
    })
    .test('fileType', 'Unsupported file format', value => {
      return value && SUPPORTED_FORMATS.includes(value.type);
    })
});

export default function Page() {
  const [error, setError] = useState(null);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('upload_cv', values.upload_cv);

      const response = await fetch(`${BASE_URL}/careers/add`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast.success('Career form submitted successfully!', {
            position: "top-center", 
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        resetForm();
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <ToastContainer
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <section className="career section1 section-space f-section-space">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 left">
              <div className="image">
                <Image src="/nexontest/assets/images/j-slide.jpg" width={953} height={555} className="img-responsive" alt="Kundu" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="hm info">
                <h1>Join Us</h1>
                <p>
                  At Nexon, we don’t just stress on maintaining superior quality in
                  our products but also in our work culture. That’s why we welcome
                  fresh ideas, new approach and talent with open arms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career contact-section1 section-space">
        <div className="container">
          <div className="row top-sec">
            <div className="col-sm-5 contact-right">
              <div className="col2 column2 last">
                <div className="sec2contactform">
                  <h3 className="sec2frmtitle">
                    Open Position<br /><span>HR Manager</span>
                  </h3>
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      phone: '',
                      upload_cv: null,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ setFieldValue }) => (
                      <Form>
                        <div className="f-rw row">
                          <div className="col-sm-12">
                            <label>Name</label>
                            <Field className="col2 first" name="name" type="text" />
                            <ErrorMessage name="name" component="div" className="invalid-feedback alert alert-danger" />
                          </div>
                          <div className="col-sm-12">
                            <label>Email</label>
                            <Field className="col2 sec" name="email" type="email" />
                            <ErrorMessage name="email" component="div" className="invalid-feedback alert alert-danger" />
                          </div>
                        </div>
                        <div className="f-rw row">
                          <div className="col-sm-12">
                            <label>Phone Number</label>
                            <Field className="col2 first" name="phone" type="tel" />
                            <ErrorMessage name="phone" component="div" className="invalid-feedback alert alert-danger" />
                          </div>
                          <div className="col-sm-12 upl">
                            <label>Upload CV</label>
                            <input
                              className="col2 sec"
                              name="upload_cv"
                              type="file"
                              onChange={(event) => {
                                setFieldValue("upload_cv", event.currentTarget.files[0]);
                              }}
                            />
                            <p>File Format: pdf, doc, docx</p>
                            <p>File Size: Not more than 5 MB</p>
                            <ErrorMessage name="upload_cv" component="div" className="invalid-feedback alert alert-danger" />
                          </div>
                        </div>
                        <div className="f-rw sbtn row">
                          <div className="col-sm-12">
                            <input type="submit" value="Submit" />
                          </div>
                        </div>
                        {error && (
                          <div className="alert alert-danger mt-3" role="alert">
                            {error}
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}