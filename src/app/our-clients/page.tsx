'use client';
import Image from "next/image";


export default function Page() {

    return (
            <>
            <section className="story-section1 section-space page-banner p-0">
                <div className="banner position-relative">
                {/* Background image */}
                <Image
                    src="/nexontest/assets/images/our-story-banner.png"
                    alt="Banner"
                    className="img-fluid w-100"
                    width={1440}
                    height={500}
                />
                {/* Overlay content */}
                <div className="container">
                    <div className="row">
                    <div className="col-12 d-flex hm info">
                        <div className="heading-content position-absolute">
                        <h1>Paints That Do More <br /> Than Just Color</h1>
                        <p>
                            Make every wall a statement—inside or out. Explore our range of
                            high-performance interior and exterior paints designed for
                            lasting beauty, protection and style.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="story-section3 story-bg section-space">
                <div className="container">
                <div className="row col-12">
                    <div className="col-md-6 info text-white">
                    <h2 className="text-white">Our Journey to Colour</h2>
                    <p>
                        Founded in 2008 by Mr. Khartaram Choudhary in Hyderabad as Saicoat
                        Paints, Nexon Paints began with a journey of passion, purpose and a
                        dream to make each brushstroke meaningful. With our first
                        manufacturing unit operational in 2009, we laid the foundation to
                        become a place blending innovation and craftsmanship to infuse
                        passion in every droplet of paint.. In 2017, we rebranded as Nexon
                        Paints; reflecting our evolution, ambition, and motto: Aspire to
                        Inspire.
                    </p>
                    <p>
                        From empowering local dealers and painters to collaborating with
                        architects and designers, we believe in partnerships built on
                        growth, creativity, and trust. For families and dreamers who choose
                        us, we promise colours that bring life to spaces with beauty and
                        durability.
                    </p>
                    <p>
                        Our commitment to quality and sustainability earned us the ET
                        Excellence Award for “Excellence in Manufacturing of Decorative
                        Paints” in 2024. Every shade in our logo represents trust, progress,
                        and purpose; values that continue to guide our journey from
                        Hyderabad to homes across India.
                    </p>
                    </div>
                    <div className="col-md-6 p-5">
                    <Image src="/nexontest/assets/images/our-story-img1.png" width={552} height={538} alt="Our Journey to Colour" />
                    </div>
                </div>
                </div>
            </section>
            <section className="section6 position-relative text-center">
                {/* Background image */}
                <div className="image">
                <Image
                    src="/nexontest/assets/images/image111.png"
                    alt="Background"
                    className="img-fluid w-100 d-block"
                    width={1905} height={1061} 
                />
                </div>
                {/* Video overlay */}
                <div className="video-box position-absolute top-50 start-50 translate-middle w-75">
                <div className="ratio ratio-16x9">
                    {" "}
                    {/* Bootstrap for responsive video */}
                    <iframe
                    src="https://www.youtube.com/embed/5ahkFqNZzhA"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="rounded shadow-lg"
                    ></iframe>
                </div>
                </div>
            </section>
            <section className="story-section3 story-bg section-space section3-sidechange">
                <div className="container">
                <div className="row col-12">
                    <div className="col-md-6">
                    <Image src="/nexontest/assets/images/our-story-img2.png" width={624} height={564} alt="A Vision in Every Hue" />
                    </div>
                    <div className="col-md-6 info text-white">
                    <h2 className="text-white">A Vision in Every Hue</h2>
                    <h3>Our Vision</h3>
                    <p>
                        To inspire everyday people and all those who journey with us to
                        dream bigger through the power of colour — transforming spaces,
                        uplifting lives, and leaving a lasting impression on every wall we
                        touch.
                    </p>
                    <h3>Our Mission</h3>
                    <p>
                        At Nexon Paints, we are committed to delivering high-quality,
                        environmentally friendly, and innovative paint solutions that
                        empower people to express themselves, protect their spaces, and
                        build a more vibrant world. We will do so with a clear focus on
                        trust and sustainability, thereby delivering value to our customers
                        and stakeholders.
                    </p>
                    </div>
                </div>
                </div>
            </section>
            <section className="story-section3 story-bg section-space">
                <div className="container">
                <div className="row col-12 align-items-center">
                    <div className="col-md-6 info text-white">
                    <h2 className="text-white">Brand Story + Logo Story </h2>
                    <p>
                        Nexon Paints’ journey is one of transformation, driven by purpose
                        and people. Our renewed identity and logo reflect this evolution.
                        The vibrant “O” in our logo features six colours, each representing
                        a core pillar of our journey:&nbsp;Red&nbsp;for innovation,&nbsp;Sky
                        Blue&nbsp;for customer bonds,&nbsp;Orange&nbsp;for dealer
                        trust,&nbsp;Green&nbsp;for sustainability,&nbsp;Yellow&nbsp;for
                        painter partnerships, and&nbsp;Blue&nbsp;for our dedicated
                        employees.
                    </p>
                    <p>
                        Our tagline,&nbsp;“Aspire to Inspire,”&nbsp;is more than a motto;
                        it’s our philosophy. We empower small dealers to grow, support
                        employees with trust and recognition, partner with painters through
                        skill development and offer customers more than colour. We help them
                        create spaces that reflect who they are.
                    </p>
                    <p>
                        Every product we craft represents our promise of&nbsp;quality,
                        sustainability, and innovation. From durable finishes to
                        eco-friendly solutions, we’re here to build brighter futures,
                        together.
                    </p>
                    <p>
                        At Nexon Paints, we don’t just paint walls, we paint with purpose.
                    </p>
                    </div>
                    <div className="col-md-6 p-4">
                    <Image src="/nexontest/assets/images/our-story-img3.png" width={600} height={585} alt="Brand Story" />
                    </div>
                </div>
                </div>
            </section>
            <section className="story-section-map story-bg section-space">
                <div className="container">
                <div className="row hm info text-center justify-content-center">
                    <h2 className="text-white">
                    Making Spaces More <br />
                    Bright &amp; Lively
                    </h2>
                    <p>Our Presence</p>
                    <div className="image my-4">
                    <Image className="w-100" src="/nexontest/assets/images/our-story-map.png" width={676} height={602} alt="Making Spaces More Bright & Lively" />
                    </div>
                </div>
                </div>
            </section>
            </>

    );
}