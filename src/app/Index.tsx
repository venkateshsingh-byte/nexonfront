'use client';
import React  from "react";
import Image from "next/image";
import Slider from '../app/components/Home/slider'
import HomeProduct from "./components/Home/HomeProduct";
import HomeInspiration from "./components/Home/HomeInspiration";
import HomeFaq from "./components/Home/HomeFaq";


export default function Index() {


  //console.log("Check Slider",slider)

  return (
    <>
    <Slider/>
  {/* Section 2: Explore 2200 Colors */}
  <section className="section2 section-space ">
    <div className="container">
      <div className="row">
        <div className="hm info">
          <h2>
            Explore 2200 Colors Shades <br /> designed for style &amp; comfort.
          </h2>
          <p>
            Find the Nexon’s wide range of colors to achieve the desired look
            with <br /> an Indian touch for every wall, every room &amp; every
            tradition.{" "}
          </p>
        </div>
      </div>
      <div className="row btm g-4 justify-content-center py-5">
        {/* Card 1 */}
        <div className="col-md-4 col-sm-6 col-6">
          <div className="card">
            <Image src="/nexontest/assets/images/image71.png" height={888} width={795} alt="Explore Colors by Regions" />
            <div className="card-title">Explore Colors by Regions</div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4 col-sm-6 col-6">
          <div className="card">
            <Image src="/nexontest/assets/images/image72.png" height={888} width={795} alt="Explore Colors by Moods" />
            <div className="card-title">Explore Colors by Moods</div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4 col-sm-6 col-6">
          <div className="card">
            <Image src="/nexontest/assets/images/image73.png" height={888} width={795} alt="Explore All 2200 Colors" />
            <div className="card-title">Explore All 2200 Colors</div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-4 col-sm-6 col-6">
          <div className="card">
            <Image src="/nexontest/assets/images/image74.png" height={888} width={795} alt="Visualize Your Room" />
            <div className="card-title">Visualize Your Room</div>
            <div className="card-subtitle">
              Discover how your walls will look.
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="col-md-4 col-sm-6 col-6">
          <div className="card">
            <Image src="/nexontest/assets/images/image75.png" height={888} width={795} alt="Paint Calculator" />
            <div className="card-title">Paint Calculator</div>
            <div className="card-subtitle">
              Get the right amount of paint for your walls.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <HomeInspiration/>


  {/* Section 4: Paint Features & Product Carousel (Slick can be used here) */}
  <HomeProduct/>


  {/* Section 5: Category grid */}
  <section className="section5 section-space py-5">
    <div className="container">
      <div className="top info mb-4 text-center">
        <h2 className="fw-bold">
          Why Choose Nexon <br /> Paints for Your Home?
        </h2>
        <p>
          Because your walls deserve the best. Everything <br /> your home needs
          in every color you love.
        </p>
      </div>
      <div className="middle d-flex justify-content-center align-items-center gap-5 flex-wrap">
        <div className="text-center">
          <Image src="/nexontest/assets/images/image60.svg" height={100} width={100} alt="Washable" />
          <p>Washable</p>
        </div>
        <div className="text-center">
          <Image src="/nexontest/assets/images/image61.svg" height={100} width={100} alt="Long Lasting" />
          <p>Long Lasting</p>
        </div>
        <div className="text-center">
          <Image src="/nexontest/assets/images/image62.svg" height={100} width={100} alt="Stain Free" />
          <p>Stain Free</p>
        </div>
        <div className="text-center">
          <Image src="/nexontest/assets/images/image63.svg" height={100} width={100} alt="Eco-Friendly" />
          <p>Eco-Friendly</p>
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
  
  {/* FAQ / Accordion area (custom accordion preserved with jQuery) */}
  <HomeFaq></HomeFaq>

	</>
  );
}
