import React from "react";
import Image from "next/image";

export default function Page(){
    return (
        <>

            <section className="career section1 section-space f-section-space">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6 left">
                        <div className="image">
                        <Image src="/assets/images/j-slide.jpg" width={953} height={555} className="img-responsive" alt="Kundu" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="hm info">
                        <h1>Join Us</h1>
                        <p>
                            At Nexon, we don’t just stress on maintaining superior quality in
                            our products but also in our work culture. That’s why we welcome
                            fresh ideas, new approach and talent with open arms. As dynamic
                            people create an encouraging and stimulating work environment that
                            propels the company to constantly achieve greater heights and set
                            new benchmarks. And if this philosophy interests you, apply for the
                            open positions mentioned below.
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
                            Open Position
                            <br /> <span>HR Manager</span>
                            </h3>
                            <form action="">
                            <div className="f-rw row">
                                <div className="col-sm-12">
                                <label>Name</label>
                                <input className="col2 first" type="text" placeholder="" />
                                </div>
                                <div className="col-sm-12">
                                <label>Email</label>
                                <input className="col2 sec" type="Email" placeholder="" />
                                </div>
                            </div>
                            <div className="f-rw row">
                                <div className="col-sm-12">
                                <label>Phone Number</label>
                                <input className="col2 first" type="text" placeholder="" />
                                </div>
                                <div className="col-sm-12 upl">
                                <label>Upload CV</label>
                                <input className="col2 sec" type="file" placeholder="" />
                                <p>File Format: pdf, txt</p>
                                <p>File Size: Not more then 2 MB</p>
                                </div>
                            </div>
                            <div className="f-rw sbtn row">
                                <div className="col-sm-12">
                                <input type="submit" defaultValue="Submit" />
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


        
        </>
    )
}