import React from "react";
import Image from "next/image";

export default function Page(){
    return (
        <>
            <section className="aboutus01 section-space f-section-space">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-7 left">
                        <div className="image">
                        <video width="100%" height={440} controls="">
                            <source src="/assets/images/video.mp4" type="video/mp4" />
                            <source src="/assets/images/video.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="hm info">
                        <h1>About Us</h1>
                        <p>
                            <strong>
                            To Create Vibrant Spaces, One Needs Vibrant Ideas. And At Nexon,
                            This Is What We Focus Upon.
                            </strong>
                        </p>
                        <p>
                            Started with an aim to manufacture high quality, easy to afford
                            products, Nexon is a fast growing company. Formerly known as Saicoat
                            Paints, the company has acquired a decent share in the market as
                            well as a strong base of happy customers. And now, we are all set to
                            take the next big leap. For doing so, we have incorporated a
                            sequence of changes which include – adoption of an internationally
                            appealing identity, inclusion of a professional management structure
                            and a new team of sharp minds with acute business sense.
                        </p>
                        <p>
                            With a strong vision for the future and openness to fresh ideas,
                            Nexon gears up to spearhead on its new trajectory and make its mark
                            across India, by 2022.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <section className="aboutus02 section-space">
                <div className="container">
                    <div className="rows">
                    <div className="top">
                        <div className="hm info">
                        <h2>What we do</h2>
                        </div>
                    </div>
                    <div className="btm">
                        <div className="row">
                        <div className="col-sm-12">
                            <p>
                            Nexon Paints, headquartered in Hyderabad, is a leading
                            manufacturer and marketer of Decorative Paints in the country.
                            </p>
                            <p>
                            Our Paint portfolio includes Interior and Exterior Emulsions,
                            Primers, Solvent based products and Putty/Texture
                            </p>
                            <p>
                            Over the past 10 years, we have created a reputation of providing
                            very good quality products and excellent customer service. Thus we
                            have emerged as the brand of choice for Painters, Contractors, and
                            Builders.
                            </p>
                            <p>
                            We provide excellent value for money to our customers. We also
                            believe in product innovation whilst at the same time being
                            environment friendly.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="btm">
                        <div className="row">
                        <div className="col-sm-4">
                            <div className="secbor">
                            <h3>Vision</h3>
                            <ul>
                                <li>
                                Offer the best in class value proposition with regards to the
                                performance of our paints.
                                </li>
                                <li>
                                Nurturing a winning network of partners and building mutual
                                loyalty.
                                </li>
                                <li>
                                Merit and performance based approach within our ecosystem
                                which will create winning teams.
                                </li>
                                <li>Care for the environment</li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="secbor">
                            <h3>Mission</h3>
                            <ul>
                                <li>
                                We would like to be one of the trusted player in India in the
                                decorative paints segment.
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="secbor">
                            <h3>Values</h3>
                            <ul>
                                <li>Integrity above all</li>
                                <li>Flawless Service</li>
                                <li>
                                Merit and performance based approach within our ecosystem
                                which will create winning teams.
                                </li>
                                <li>Transparent Ecosystem</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>



            <section className="aboutus03 section-space">
                <div className="container">
                    <div className="rows">
                    <div className="top">
                        <div className="hm info">
                        <h2>Our Team </h2>
                        </div>{" "}
                    </div>
                    <div className="btm">
                        <div className="row">
                        <div className="col-sm-3">
                            <div className="bx">
                            <a href="#">
                                <div className="image">
                                <Image src="/assets/images/man01.webp" width={200} height={208} className="img-responsive" alt="Khartaram" />
                                </div>
                                <div className="title">
                                <p>Mr. Khartaram Choudhary</p>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="bx">
                            <a href="#">
                                <div className="image">
                                <Image src="/assets/images/man01.webp" width={200} height={208} className="img-responsive" alt="Mundkur" />
                                </div>
                                <div className="title">
                                <p>Mr. Ajoy Mundkur</p>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="bx">
                            <a href="#">
                                <div className="image">
                                <Image src="/assets/images/man01.webp" width={200} height={208} className="img-responsive" alt="Praveen" />
                                </div>
                                <div className="title">
                                <p>Mr. Praveen Choudhary</p>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="bx">
                            <a href="#">
                                <div className="image">
                                <Image src="/assets/images/man01.webp" width={200} height={208} className="img-responsive" alt="Kundu" />
                                </div>
                                <div className="title">
                                <p>Mr. Milan Kundu Chaudhary</p>
                                </div>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <section className="aboutus04 section-space">
                <div className="container">
                    <div className="rows">
                    <div className="top">
                        <div className="hm info">
                        <h2>Our Clients</h2>
                        </div>{" "}
                    </div>
                    <div className="btm">
                        <div className="row">
                        <div className="col-sm-2">
                            <Image src="/assets/images/c01.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2"> 
                            <Image src="/assets/images/c02.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c03.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c04.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c05.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c06.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c07.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c08.jpg" width={190} height={101} className="img-responsive"  alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c09.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c10.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c11.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c12.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        <div className="col-sm-2">
                            <Image src="/assets/images/c13.jpg" width={190} height={101} className="img-responsive" alt="Kundu" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <section className="aboutus05 section-space">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-7">
                        <div className="hm info">
                        <h1>Development Lab</h1>
                        <p>
                            <strong>
                            Mere vibrant ideas are not enough to create a range of outstanding
                            products. What’s also imperative is the execution of an idea.
                            </strong>
                        </p>
                        <p>
                            Precisely why, we own an ultra-modern plant in the beautiful city of
                            Nizams. Situated amidst the beautiful environs of Pashamylaram, the
                            Nexon plant is a picturesque place and apt to boost vibrant ideas.
                            Built to deliver the best quality paints and ancillary products, the
                            plant is well-equipped with advanced machinery. Along with this, the
                            staff manning the machines is also intensively trained to reduce
                            wastage during production, avoid breakdowns and time lag in the
                            production cycle.
                        </p>
                        <p>
                            Holding quality as top priority, the production process includes
                            multi-level checks and controls to deliver nothing less than the
                            best.
                        </p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="image">
                        {" "}
                        <Image src="/assets/images/labimg.jpg" width={520} height={541} alt="Kundu" />
                        </div>
                    </div>
                    </div>
                    <div className="row" style={{ marginTop: 30 }}>
                    <div className="col-sm-5">
                        <div className="image">
                        {" "}
                        <Image src="/assets/images/labimg02.jpg" width={520} height={514} alt="Kundu" />
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="hm info">
                        <h1>R &amp; D Facility</h1>
                        <p>
                            <strong>
                            Our in-depth and qualitative research paves way for innovation and
                            that blooms happiness on the faces of ourcustomers.
                            </strong>
                        </p>
                        <p>
                            The R &amp; D wing strives to upgrade the existing products with
                            advanced technology and innovate new things simultaneously.
                        </p>
                        <p>
                            Our strong team of qualified technologists and scientists firmly
                            supports the company’s business plan and marketing needs. Our
                            R&amp;D laboratories are fully equipped with state-of-the-art
                            scientific instruments, sophisticated testing and analytical
                            instruments, color matching softwares, automatic dispensing
                            machines,accelerated weathering equipment for developing,
                            standardizing and testing our products.
                        </p>
                        <p>
                            Apart from this, R&amp;D extends valuable support to other functions
                            like manufacturing, sourcing in terms of process stansardizations,
                            product trainings, raw material efficacy amongst many.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="row" style={{ marginTop: 30 }}>
                    <div className="col-sm-7">
                        <div className="hm info">
                        <h1>Manufacturing Facility</h1>
                        <p>
                            <strong>
                            Our factory is located in Pashyamylaram which is on the outskirts
                            of Hyderabad.
                            </strong>
                        </p>
                        <p>
                            It houses state of the art technology and modern amenities for the
                            manufacture of premium quality textures and paints, and is taken
                            care of by a team of experienced professionals who have been with
                            the company for many years.
                        </p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="image">
                        {" "}
                        <Image src="/assets/images/labimg03.jpg" width={520} height={313} alt="Kundu" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>


        </>
    )
}