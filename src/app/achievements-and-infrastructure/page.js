'use client';
import Image from "next/image";
import Link from "next/link";


export default function Page() {

    return (
        <>
             
        <section className="ach-section1 section-space page-banner p-0 head-space">
            <div className="banner position-relative">
            {/* Background image */}
            <Image
                src="/nexontest/assets/images/ach-banner.png"
                alt="Banner"
                className="img-fluid w-100"
                width={1905}  
                height={661}
            />
            {/* Overlay content */}
            <div className="container">
                <div className="row">
                <div className="col-12 d-flex hm info">
                    <div className="heading-content position-absolute">
                    <h1 className="text-white">Paints That Do More <br /> Than Just Color</h1>
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
        <section className="ach-section2 ach-bg ">
            <div className="container">
                <div className="row info text-white">
                    <div className="d-flex flex-row hm info progression py-5">
                    <p><Link href="/" className="text-white">Home </Link></p>
                    <div className="px-1">
                        <Image src="/nexontest/assets/images/progression-icon.svg" width={21}
                    height={21} alt="progression" />
                    </div>
                    <p>About Us</p>
                    <div className="px-1 ">
                        <Image src="/nexontest/assets/images/progression-icon-active.svg" width={21}
                    height={21} alt="progression" />
                    </div>
                    <p className="active-page">Achievements &amp; Infrastructure</p>
                    </div>
                    <h2 className="text-white">Our Achievements</h2>
                    <p>The Awards</p>
                </div>
                <div className="col-12 row">
                    <div className="image col-md-3">
                    <Image src="/nexontest/assets/images/award1.png" width={300} height={404} alt="Awards" />
                    </div>
                    <div className="image col-md-3">
                    <Image src="/nexontest/assets/images/award2.png" width={300} height={404} alt="Awards" />
                    </div>
                    <div className="image col-md-3">
                    <Image src="/nexontest/assets/images/award3.png" width={300} height={404} alt="Awards" />
                    </div>
                    <div className="image col-md-3">
                    <Image src="/nexontest/assets/images/award4.png" width={300} height={404} alt="Awards" />
                    </div>
                </div>
            </div>
        </section>
        <section className="ach-section3 ach-bg section-space">
            <div className="container">
            <div className="row col-12">
                <div className="col-md-6 info text-white">
                <h2 className="text-white">
                    Manufacturing Excellence, Powered by Values
                </h2>
                <p>We Stand for a Greener Tomorrow</p>
                <p>
                    Located on the outskirts of Hyderabad in Pashamylaram, our ISO
                    9001:2015 certified factory is a beacon of innovation and
                    efficiency, committed to operational excellence
                </p>
                <p>
                    With state-of-the-art facilities and a trusted team of long-time
                    professionals, the unit manufactures:
                </p>
                <ul style={{ listStyleType: "disc" }}>
                    <li>Decorative Interior &amp; Exterior Water-Based Paints</li>
                    <li>Solvent-Based Paints &amp; Coatings</li>
                    <li>Designer Textures &amp; Finishes</li>
                </ul>
                <p>
                    Every drop of paint that leaves our plant carries the precision of
                    cutting-edge technology and the dedicated passion of our team,
                    driven by a shared commitment to exceptional quality.
                </p>
                </div>
                <div className="col-md-6 p-0">
                <Image src="/nexontest/assets/images/ach-img1.png" width={648} height={443} alt="Manufacturing" />
                <div className="d-flex align-items-center">
                    <p className="px-3">
                    {" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={33}
                        viewBox="0 0 25 33"
                        fill="none"
                    >
                        <path
                        d="M18.8696 27.1859C17.4067 28.9688 15.8542 30.6934 14.0347 32.1359C12.0149 33.7362 11.1234 32.6949 9.48651 31.255C3.75889 26.2159 -1.85224 17.4769 0.584509 9.5226C3.64827 -0.478327 17.3851 -2.19838 22.8012 6.81292C26.8598 13.5649 23.3621 21.7096 18.8696 27.1859ZM18.7812 6.80769C18.6628 6.68399 18.5836 6.60021 18.454 6.48043C18.399 6.42938 18.3362 6.42611 18.3231 6.41498C18.2831 6.37964 18.2465 6.31811 18.1267 6.21863C17.9958 6.10998 18.0541 6.03995 17.7995 5.95682C17.7569 5.87174 17.6954 5.79385 17.6031 5.76047C17.5835 5.75327 17.556 5.76832 17.5376 5.76047C17.4277 5.51568 17.1279 5.47118 16.9486 5.36776C16.9002 5.33962 16.8576 5.32391 16.8177 5.30231C16.7221 5.24995 16.6455 5.18254 16.4904 5.10596C8.05182 0.934107 -0.303008 10.2393 4.68175 18.1255C8.05052 23.4539 16.0303 23.6391 19.6851 18.4789C22.2927 14.7973 21.8757 10.0397 18.7812 6.80769Z"
                        fill="white"
                        />
                    </svg>
                    </p>
                    <h6 className="text-white">Pashamylaram, Hyderabad</h6>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="ach-section3 ach-bg section-space section3-sidechange">
            <div className="container">
            <div className="row col-12">
                <div className="col-md-6 p-0">
                <Image src="/nexontest/assets/images/ach-img2.png" width={648} height={444} alt="Development Lab" />
                </div>
                <div className="col-md-6 info text-white">
                <h2 className="text-white">Development Lab</h2>
                <p>
                    At Nexon Paints, our cutting-edge manufacturing facility in
                    Pashamylaram, Hyderabad, <br />
                    transmuting vibrant ideas into relatable results. Facilitated by
                    advanced automation and <br />
                    intelligent workflows, the plant operates with precision, speed, and
                    consistency. Our skilled <br />
                    warfare ensures negligible downtime, stringent quality control, and
                    timely production. Each <br />
                    batch undergoes multi-stage inspections, upholding our commitment to
                    excellence in every <br />
                    drop of paint we produce. Great ideas alone don’t create great
                    products; execution does.
                </p>
                </div>
            </div>
            </div>
        </section>
        <section className="ach-section3 ach-bg section-space">
            <div className="container">
            <div className="row col-12">
                <div className="col-md-6 info text-white">
                <h2 className="text-white">R&amp;D Facility</h2>
                <p>
                    Innovation is at the heart of Nexon Paints. Our R&amp;D Centre, led
                    by expert scientists and technicians, plays a pivotal role in
                    shaping the future of our products. From enhancing performance and
                    durability to developing eco-conscious formulations, we continuously
                    innovate to meet evolving market needs.
                </p>
                <p>Our efforts extend beyond product creation:</p>
                <ul style={{ listStyleType: "disc" }}>
                    <li>We optimize sourcing&nbsp;</li>
                    <li>Streamline manufacturing </li>
                    <li>Upskill our teams</li>
                </ul>
                <p>
                    Ensuring quality, sustainability, and scalability across every
                    process.
                </p>
                </div>
                <div className="col-md-6 p-0">
                <Image src="/nexontest/assets/images/ach-img3.png" width={648} height={444} alt="R & D Facility" />
                </div>
            </div>
            </div>
        </section>
        </>
 
        
    );
}    