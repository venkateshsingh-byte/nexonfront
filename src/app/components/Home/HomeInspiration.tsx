"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BASE_URL from "@/app/config/base_url";

// Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Photo = { inspired_full_img?: string | null };

type InspiredItem = {
  _id?: string;
  inspired_name?: string;
  inspired_full_img?: string | null; // MAIN image
  left_img?: Photo | null;
  right_img?: Photo | null;
};

const IMG_BASE =
  process.env.NEXT_PUBLIC_INSPIRED_IMG_URL ||
  "http://localhost:4000/public/uploads/inspired_img/";

const fileUrl = (name?: string | null) => (name ? `${IMG_BASE}${name}` : "");

export default function HomeInspiration() {
  const [inspired, setInspired] = useState<InspiredItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${BASE_URL}/inspireds`, { cache: "no-store" });
        const j = await r.json();
        setInspired(Array.isArray(j?.inspired) ? j.inspired : []);
      } catch (err) {
        console.error("Inspiration Data Fetch", err);
        setInspired([]);
      }
    })();
  }, []);

  const fallbackLeft = "/nexontest/assets/images/image80.png";
  const fallbackRight = "/nexontest/assets/images/image81.png";

  return (
    <section className="section3 section-space">
      <div className="container">
        <div className="rows">
          <div className="top info mt-5">
            <h2>
              Get Inspired by Real Homes, <br /> Real Colors
            </h2>
            <div className="clearfix d-flex align-items-center">
              <p className="col-md-8 pull-left">
                From classic traditions to modern trends, explore ideas inspired by
                <br /> real Indian homes—full of culture, color and creativity.
              </p>
              <div className="col-md-4 anc d-flex justify-content-center align-items-center">
                <Link href="/inspirations">View All Inspirations</Link>
              </div>
            </div>
          </div>

          <div className="btm order-2 order-md-3 p-0">
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              slidesPerView={1}
              loop={inspired.length > 1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="swiper-homes py-5"
            >
              {inspired.map((item, idx) => {
                // 1) Choose primary (show this first/left)
                const primary =
                  item.inspired_full_img ||
                  item.left_img?.inspired_full_img ||
                  item.right_img?.inspired_full_img ||
                  null;

                // 2) Choose secondary (different from primary)
                const candidates = [
                  item.left_img?.inspired_full_img,
                  item.right_img?.inspired_full_img,
                ].filter(Boolean) as string[];

                const secondary =
                  candidates.find((c) => c !== primary) || null;

                const leftSrc = primary ? fileUrl(primary) : fallbackLeft;
                const rightSrc = secondary ? fileUrl(secondary) : fallbackRight;

                return (
                  <SwiperSlide key={item._id ?? idx}>
                    <div className="row d-flex justify-content-center slide gy-2">
                      {/* PRIMARY FIRST */}
                      <div className="col-sm-6 left ">
                        <div className="image position-relative">
                          <Image
                            src={leftSrc}
                            className="img-responsive"
                            width={1176}
                            height={440}
                            alt={item.inspired_name || "Inspiration main"}
                            unoptimized
                          />
                          {item.inspired_name ? (
                            <h3 className="position-absolute">{item.inspired_name}</h3>
                          ) : null}
                        </div>
                      </div>  

                      {/* SECONDARY NEXT */}
                      <div className="col-sm-6 right slide gy-2">
                        <div className="image">
                          <Image
                            src={rightSrc}
                            className="img-responsive"
                            width={1176}
                            height={440}
                            alt={item.inspired_name || "Inspiration secondary"}
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
