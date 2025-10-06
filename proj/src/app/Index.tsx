'use client';
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import EveryHome from './components/Home/everyHome'
import FAQ from "./components/Home/faq"


export default function Index() {
  return (
    <>
      <section className="hm-section1 section1 section-space f-section-space">
        <div className="containers">
          <div className="row">
            <div className="col-sm-7 left">
              <div className="image">
                <Image src="/assets/images/sofa-image.jpg" className="img-responsive" width={968} height={751} alt="Home" />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="hm info">
                <h1>
                  Colors that <br />
                  Transform, <br />
                  Homes that <br />
                  Inspire
                </h1>
                <p>
                  Eco-Refresh your home with colors you'll love-safe, vibrant,
                  lasting, vibrant, and lasting paints designed for beautiful living.
                </p>
                <div className="anc">
                  <button>Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section2 section-space">
        <div className="container">
          <div className="rows">
            <div className="top">
              <div className="hm info text-right">
                <h2>
                  Colors <br /> that suit your <br /> dream home{" "}
                </h2>
              </div>
            </div>
            <div className="btm">
              <div className="row">
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="title">
                        <p>
                          Browse by <br /> Vastu Colors{" "}
                        </p>
                      </div>
                      <div className="image">
                        <Image src="/assets/images/wall1.jpg" width={298} height={373} className="img-responsive" alt="Home" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="title">
                        <p>
                          Browse <br /> by Moods
                        </p>
                      </div>
                      <div className="image">
                        <Image src="/assets/images/wall2.jpg" width={298} height={373} className="img-responsive" alt="Home" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="title">
                        <p>
                          Browse Feng <br /> Shui Colors
                        </p>
                      </div>
                      <div className="image">
                        <Image src="/assets/images/wall3.jpg" width={298} height={373} className="img-responsive" alt="Home" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="title">
                        <p>
                          Browse <br /> by Regions{" "}
                        </p>
                      </div>
                      <div className="image">
                        <Image src="/assets/images/wall4.jpg" width={298} height={373} className="img-responsive" alt="Home" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section3 section-space">
        <div className="container">
          <div className="rows">
            <div className="top">
              <div className="info text-right">
                <h2>
                  Need help? <br /> How can we <br /> help you?{" "}
                </h2>
              </div>
            </div>
            <div className="btm">
              <div className="row">
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="image">
                        <Image src="/assets/images/colors.jpg" width={200} height={194} className="img-responsive" alt="Home" />
                      </div>
                      <div className="title">
                        <p>
                          Choose your <br /> Shade
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="image">
                        <Image src="/assets/images/space.jpg" width={200} height={194} className="img-responsive" alt="Home" />
                      </div>
                      <div className="title">
                        <p>
                          Visualize <br /> your Space
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="image">
                        <Image src="/assets/images/estimator.jpg" width={200} height={194} className="img-responsive" alt="Home" />
                      </div>
                      <div className="title">
                        <p>
                          Paint <br /> Estimator
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section4 section-space">
        <div className="container">
          <div className="slider slider1">
            <div>
              <div className="row">
                <div className="col-sm-7">
                  <div className="image">
                    <Image src="/assets/images/buckets1-sl.png" width={683} height={394} className="img-responsive" alt="Home" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="hm info">
                    <h2>
                      Paints <br /> handpicked <br /> for your <br /> walls
                    </h2>
                    <p>
                      Our eco-friendly paints <br />
                      suited for your family <br />
                      and the environment!
                    </p>
                  </div>
                </div>
              </div>
              <div className="caption-title text-center">
                <h3>Rubycon</h3>
                <p>
                  Luxury Interior Emulsion <br /> High Gloss
                </p>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-sm-7">
                  <div className="image">
                    <Image src="/assets/images/buckets2-sl.png" width={683} height={394} className="img-responsive" alt="Home" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="hm info">
                    <h2>
                      Paints <br /> handpicked{" "}
                    </h2>
                    <p>
                      Our eco-friendly paints <br />
                      suited for your family <br />
                      and the environment!
                    </p>
                  </div>
                </div>
              </div>
              <div className="caption-title text-center">
                <h3>Rubycon</h3>
                <p>
                  Luxury Interior Emulsion <br /> High Gloss
                </p>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-sm-7">
                  <div className="image">
                    <Image src="/assets/images/buckets3-sl.png" width={683} height={394} className="img-responsive" alt="Home" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="info">
                    <h2>
                      Paints <br /> handpicked <br /> for your <br /> walls
                    </h2>
                    <p>
                      Our eco-friendly paints <br />
                      suited for your family <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="caption-title text-center">
                <h3>Rubycon</h3>
                <p>
                  Luxury Interior Emulsion <br /> High Gloss
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section5 section-space">
        <div className="container">
          <div className="rows">
            <div className="top">
              <div className="hm info text-right">
                <h2>
                  Get Inspired <br /> by Vibrant ideas{" "}
                </h2>
                <p>
                  Inspire creativity with <br /> these captivating visuals
                </p>
              </div>
            </div>
            <div className="btm">
              <div className="row">
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="title">
                        <p>Bedroom </p>
                      </div>
                      <div className="image">
                        <Image src="/assets/images/wall5.jpg" width={298} height={364} className="img-responsive" alt="Home" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="title">
                        <p>Dining Room</p>
                      </div>
                      <div className="image">
                        <Image src="/assets/images/wall6.jpg" width={298} height={364} className="img-responsive" alt="Home" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="title">
                        <p>Kids Room</p>
                      </div>
                      <div className="image">
                        <Image src="/assets/images/wall7.jpg" width={298} height={364} className="img-responsive" alt="Home" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bx">
                    <Link href="#">
                      <div className="title">
                        <p>Study Room </p>
                      </div>
                      <div className="image">
                        <Image src="/assets/images/wall8.jpg" width={298} height={364} className="img-responsive" alt="Home"  />
                      </div>
                    </Link>   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <EveryHome/>

      <FAQ/>  

	</>
  );
}
