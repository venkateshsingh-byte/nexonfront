"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BASE_URL from "@/app/config/base_url";

// ⬇️ Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Product = {
  _id?: string;
  slug: string;
  product_name: string;           // may contain HTML (e.g., <sup>)
  product_subname?: string;
  product_home_banner_img?: string | null;
  benefit?: string | null;        // HTML string
};

const IMG_BASE =
  process.env.NEXT_PUBLIC_PRODUCT_IMG_URL ||
  "http://localhost:4000/public/uploads/product_img/";

const fileUrl = (name?: string | null) => (name ? `${IMG_BASE}${name}` : "");
const stripHtml = (s?: string) => (s ?? "").replace(/<[^>]+>/g, " ").trim();

export default function HomeProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}/products/`, { cache: "no-store" });
        const json = await res.json();
        setProducts(Array.isArray(json?.products) ? json.products : []);
      } catch (err) {
        console.error("Failed to load products", err);
        setProducts([]);
      }
    })();
  }, []);
  //products.map((data) => console.log(data.product_home_banner_img))
  return (
    <section className="section4 section-space py-5 bg-light">
      <div className="container">
        <div className="top info mb-4">
          <h2>
            Discover Vibrant Interior &amp; <br />
            Exterior Eco-Friendly Paints
          </h2>
        </div>

        {/* ✅ Use Swiper React instead of raw DOM classes */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          loop={products.length > 1}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper3 mb-2"
        >
          {products.slice(0,5).map((p) => (
            <SwiperSlide key={p._id ?? p.slug}>
              <div className="row justify-content-center gx-4 align-items-center product_swiper_hp">
                <div className="col-sm-6 order-2 order-lg-1 col-8 py-5">
                  <div className="image ">
                    <Image
                      className="img-fluid "
                      src={
                        p.product_home_banner_img
                          ? fileUrl(p.product_home_banner_img)
                          : "/nexontest/assets/images/image86.png"
                      }
                      alt={stripHtml(p.product_name) || "Product"}
                      width={982}
                      height={710}
                      unoptimized
                    />
                  </div>
                </div>

                <div className="col-sm-6 order-1">
                  <div className="rows">
                    {/* product_name may include <sup> etc. */}
                    <h2
                      className="fw-semibold fs-2"
                      dangerouslySetInnerHTML={{
                        __html: p.product_name || "Product",
                      }}
                    />
                    {p.product_subname ? <h6>{p.product_subname}</h6> : null}

                    {/* Benefits from API (HTML) */}
                    {p.benefit ? (
                      <div
                        className="d-flex flex-wrap gap-3"
                        dangerouslySetInnerHTML={{ __html: p.benefit }}
                      />
                    ) : (
                      <div className="d-flex flex-wrap gap-3" />
                    )}

                    <div className="anc mt-3">
                      <Link
                        href={`/product/${p.slug}`}
                        className="btn btn-outline-dark"
                      >
                        Discover {stripHtml(p.product_name) || "Product"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="bottom container-fluid text-center ">
          <h4>
            Experience the luxury of high gloss and the ease of effortless
            cleaning. Stains vanish in a wipe, but the shine stays!
          </h4>
        </div>
      </div>
    </section>
  );
}
