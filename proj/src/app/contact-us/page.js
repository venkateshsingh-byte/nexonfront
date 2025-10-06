import React from "react";
import Image from "next/image";

export default function Page(){
    return (
        <>
            <section className="contact-section1 section-space f-section-space">
                <div className="container">
                    <div className="top">
                    <div className="hm info text-center">
                        <h2>Contact Us </h2>
                    </div>
                    </div>
                    <div className="row top-sec">
                    <div className="col-sm-6 contact-left">
                        <div className="col2 column1 first">
                        <div className="contact-l">
                            <div className="icon">
                            <Image src="/assets/images/contact-icon1.jpg" width={44} height={47} alt="Contact Us" />
                            </div>
                            <div className="ri">
                            <h2 className="section_title text-grey">
                                Regd. &amp; Corporate Office
                            </h2>
                            <div className="ad-info">
                                8-2-293/K/5 &amp; Plot No. 5, <br /> 3rd Floor, Kamalapuri
                                Colony, <br /> Hyderabad- 500073
                            </div>
                            </div>
                        </div>
                        <div className="contact-l">
                            <div className="icon">
                            <Image src="/assets/images/contact-icon1.jpg" width={44} height={47} alt="Contact Us" />
                            </div>
                            <div className="ri">
                            <h2 className="section_title text-grey">Factory</h2>
                            <div className="ad-info">
                                Plot No-75 &amp; 76(P), EPIP, <br /> Pashamylaram, Patancheru
                                Mandal, <br /> Sangareddy Dist. 502307, <br /> Hyderabad,
                                Telangana
                            </div>
                            </div>
                        </div>
                        <div className="contact-l">
                            <div className="icon">
                            <Image src="/assets/images/contact-icon3.jpg" width={44} height={47} alt="Contact Us" />
                            </div>
                            <div className="ri">
                            <h2 className="section_title text-grey">Get in Touch</h2>
                            <div className="ad-info">care@nexonpaints.com</div>
                            </div>
                        </div>
                        <div className="contact-l">
                            <div className="icon">
                            <Image src="/assets/images/contact-icon2.jpg" width={44} height={47} alt="Contact Us" />
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
                            <h3 className="sec2frmtitle">
                            Have thoughts about our work? Tell us!
                            </h3>
                            <form action="">
                            <div className="f-rw row">
                                <div className="col-sm-6">
                                <label>Name</label>
                                <input className="col2 first" type="text" placeholder="" />
                                </div>
                                <div className="col-sm-6">
                                <label>Email</label>
                                <input className="col2 sec" type="Email" placeholder="" />
                                </div>
                            </div>
                            <div className="f-rw row">
                                <div className="col-sm-6">
                                <label>Phone Number</label>
                                <input className="col2 first" type="text" placeholder="" />
                                </div>
                                <div className="col-sm-6">
                                <label>Your City</label>
                                <input className="col2 sec" type="text" placeholder="" />
                                </div>
                            </div>
                            <div className="f-rw row">
                                <div className="col-sm-12">
                                <label>Tell us your Requirements</label>
                                <textarea
                                    name="textarea"
                                    id=""
                                    cols={30}
                                    rows={7}
                                    className="col2 sec"
                                    defaultValue={""}
                                />
                                </div>
                            </div>
                            <div className="f-rw sbtn row">
                                <div className="col-sm-12">
                                <input type="submit" defaultValue="Send" />
                                </div>
                            </div>
                            </form>
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
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>


        </>
    )
}