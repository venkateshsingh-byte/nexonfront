'use client';
import {  useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BASE_URL from '../config/base_url';

const validationSchema = Yup.object({
    name: Yup.string().required('Full Name is required'),
    city: Yup.string().required('City is required'),
    phone: Yup.string().matches(/^[0-9\b]+$/, 'Invalid phone number').required('Phone Number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    requirements: Yup.string().required('Requirements is required'),  
});

export default function Page() {
    const [error, setError] = useState(null);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await fetch(`${BASE_URL}/contacts/add`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values)
            });

            if (response.ok) {
                toast.success('Contact form submitted successfully!', {
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

            <section className="contact-section1 section-space f-section-space">
                <div className="container">
                    <div className="top text-center">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="row top-sec">
                        <div className="col-sm-6 contact-left">
                            <div className="col2 column1 first">
                                <div className="contact-l">
                                    <div className="icon">
                                        <Image src="/nexontest/assets/images/contact-icon1.jpg" width={44} height={47} alt="Contact Us" />
                                    </div>
                                    <div className="ri">
                                        <h2 className="section_title text-grey">Regd. & Corporate Office</h2>
                                        <div className="ad-info">
                                            8-2-293/K/5 & Plot No. 5,<br />
                                            3rd Floor, Kamalapuri Colony,<br />
                                            Hyderabad- 500073
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-l">
                                    <div className="icon">
                                        <Image src="/nexontest/assets/images/contact-icon1.jpg" width={44} height={47} alt="Factory" />
                                    </div>
                                    <div className="ri">
                                        <h2 className="section_title text-grey">Factory</h2>
                                        <div className="ad-info">
                                            Plot No-75 & 76(P), EPIP,<br />
                                            Pashamylaram, Patancheru Mandal,<br />
                                            Sangareddy Dist. 502307,<br />
                                            Hyderabad, Telangana
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-l">
                                    <div className="icon">
                                        <Image src="/nexontest/assets/images/contact-icon3.jpg" width={44} height={47} alt="Email" />
                                    </div>
                                    <div className="ri">
                                        <h2 className="section_title text-grey">Get in Touch</h2>
                                        <div className="ad-info">care@nexonpaints.com</div>
                                    </div>
                                </div>
                                <div className="contact-l">
                                    <div className="icon">
                                        <Image src="/nexontest/assets/images/contact-icon2.jpg" width={44} height={47} alt="Phone" />
                                    </div>
                                    <div className="ri">
                                        <h2 className="section_title text-grey">Call Us</h2>
                                        <div className="ad-info">1800-120-8200</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 contact-right">
                            <div className="col2 column2 last">
                                <div className="sec2contactform">
                                    <h3 className="sec2frmtitle">Have thoughts about our work? Tell us!</h3>
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            city: '',
                                            phone: '',
                                            email: '',
                                            requirements: '',
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form>
                                            <div className="f-rw row">
                                                <div className="col-sm-6">
                                                    <label>Name</label>
                                                    <Field className="col2 first" name="name" type="text" />
                                                    <ErrorMessage name="name" component="div" className="invalid-feedback alert alert-danger" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>Email</label>
                                                    <Field className="col2 sec" name="email" type="email" />
                                                    <ErrorMessage name="email" component="div" className="invalid-feedback alert alert-danger mt-3" />
                                                </div>
                                            </div>
                                            <div className="f-rw row">
                                                <div className="col-sm-6">
                                                    <label>Phone Number</label>
                                                    <Field className="col2 first" name="phone" type="tel" />
                                                    <ErrorMessage name="phone" component="div" className="invalid-feedback alert alert-danger mt-3" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>Your City</label>
                                                    <Field className="col2 sec" name="city" type="text" />
                                                    <ErrorMessage name="city" component="div" className="invalid-feedback alert alert-danger mt-3" />
                                                </div>
                                            </div>
                                            <div className="f-rw row">
                                                <div className="col-sm-12">
                                                    <label>Tell us your Requirements</label>
                                                    <Field
                                                        as="textarea"
                                                        name="requirements"
                                                        rows={7}
                                                        className="col2 sec"
                                                    />
                                                    <ErrorMessage name="requirements" component="div" className="invalid-feedback alert alert-danger mt-3" />
                                                </div>
                                            </div>
                                            <div className="f-rw sbtn row">
                                                <div className="col-sm-12">
                                                    <input type="submit" value="Send" />
                                                </div>
                                            </div>
                                            {error && (
                                                <div className="alert alert-danger mt-3" role="alert">
                                                    {error}
                                                </div>
                                            )}
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="addres-bx-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d30437.33240743446!2d78.171905!3d17.523424!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf1a4b52e1d6b%3A0xb687ecadeee98dec!2sNexon%20Paints%20Pvt.Ltd.%20(Factory)!5e0!3m2!1sen!2sin!4v1747291822439!5m2!1sen!2sin"
                    width="100%"
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen  
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </>
    );
}
