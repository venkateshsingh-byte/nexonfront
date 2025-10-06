"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BASE_URL from '../../config/base_url';
import Swiper from "swiper"; // default import
import { Navigation, Pagination, Autoplay  } from "swiper/modules"; // modules only
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/slider`);
      if (!response.ok) throw new Error("Failed to fetch sliders");  
      const data = await response.json();
      setSlider(data.homeslider || []);
    } catch (err) {
      setError(err.message);
    }
  };
  //console.log("Check Swiper",slider)
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (slider.length) {
      const timer = setTimeout(() => {
        new Swiper(".mySwiper", {
          modules: [Navigation, Pagination, Autoplay ], // add modules here
          loop: slider.length > 1, // loop only if more than 1 slide
          speed: 1000,
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".slider__pagination",
            clickable: true,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          observer: true,
          observeParents: true,
        });
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [slider]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!slider.length) return <p>Loading sliders...</p>;

  return (
    <section className="hm-section11 section1 section-space f-section-space">
      <div className="container-fluid p-0">
        <div className="swiper-container swiper-x mySwiper">
          <div className="swiper-wrapper">
            {slider.map((data, index) => (
              <div key={index} className="swiper-slide" style={{ backgroundColor: data.color_code }}>
                <div className="container">
                  <div className="row hm info flex-row align-items-center justify-content-center text-md-start">
                    <div className="col-12 col-md-3 mb-4 mb-md-0 text-start">
                      <h2 className="fw-bold hm info">{data?.left_text?.replace(/<br\s*\/?>/gi, '\n')}</h2>
                    </div>
                    <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
                      <div className="card shadow-sm border-0 p-3">
                        <Image
                          //src={`${process.env.REACT_APP_SLIDER_IMG_URL}${data.slider_img}`}
                          src={`${process.env.NEXT_PUBLIC_SLIDER_IMG_URL}${data.slider_img}`}
                          className="card-img-top"
                          alt="Color Inspiration"
                          width={388}
                          height={353}
                        />
                        <div className="card-body text-dark text-start mt-3 p-0">
                          <h5 className="fw-bold mb-0 fs-4">Color</h5>
                          <small className="text-muted fs-6 fw-semibold">{data.color_code}</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="mb-3">{data?.left_text?.replace(/<br\s*\/?>/gi, '\n')}</p>
                      <div className="anc">
                        <Link href={data.slider_link} target="_blank" className="btn btn-info text-white px-3">
                          Explore Colors
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-button-prev homes-prev" />
          <div className="swiper-button-next homes-next" />
          <div className="slider__pagination swiper-pagination" />
        </div>
      </div>
    </section>
  );
}
