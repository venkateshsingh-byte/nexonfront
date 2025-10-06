"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import BASE_URL from "@/app/config/base_url";
import Link from "next/link";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IMG_BASE =
  process.env.NEXT_PUBLIC_PRODUCT_IMG_URL ||
  "http://localhost:4000/public/uploads/product_img/";

type Bucket = {
  product_small_img?: string;
  product?: { product_name?: string; product_subname?: string; slug?: string };
  product_bucket_title?: string;
};
type ColorBucketDoc = { buckets?: Bucket[] };

export default function ProductSLIDER() {
  const [items, setItems] = useState<
    { img: string; name: string; subname: string; slug?: string }[]
  >([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${BASE_URL}/colorbuckets`, { cache: "no-store" });
        const j = await r.json();

        const flat =
          (j?.data as ColorBucketDoc[] | undefined)?.flatMap((doc) =>
            (doc?.buckets ?? []).map((b) => {
              const img = b?.product_small_img ? IMG_BASE + b.product_small_img : "";
              const name = b?.product?.product_name || b?.product_bucket_title || "";
              const subname = b?.product?.product_subname || "";
              const slug = b?.product?.slug || "";
              return { img, name, subname, slug };
            })
          ) ?? [];

        setItems(flat.filter((x) => x.img && x.name));
      } catch {
        setItems([]);
      }
    })();
  }, []);

  const slides = useMemo(() => {
    const out: typeof items[] = [];
    for (let i = 0; i < items.length; i += 4) out.push(items.slice(i, i + 4));
    return out.length ? out : [[]];
  }, [items]);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!items.length) return;

    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
      swiperRef.current = null;
    }

    swiperRef.current = new Swiper(containerRef.current, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      loop: items.length > 4,
      observer: true,
      observeParents: true,
      // ✅ use string selectors (fixes TS red + timing issues)
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      swiperRef.current?.destroy(true, true);
      swiperRef.current = null;
    };
  }, [items]);

  return (
    <section className="rub-des-section3 section-space">
      <div className="container">
        <div className="row hm info dark-text">
          <h2>You may also like</h2>

          {/* ✅ Use the modern class "swiper" (works better with v10/11 docs) */}
          <div className="swiper" ref={containerRef} key={slides.length}>
            <div className="swiper-wrapper mb-5" id="gallery_wrapper">
              {slides.map((group, gi) => (
                <div className="swiper-slide" key={gi}>
                  <div className="col-12 row gap-3 container-fluid py-0 d-flex justify-content-center">
                    {group.map((data, di) => (
                      <div className="col-md-3 row d-flex justify-content-center" key={di}>
                        {/* ✅ build full path; encode slug */}
                        <Link href={`/product/${encodeURIComponent(data.slug || "")}`} className="text-decoration-none">
                          <div className="w-100 m-5 p-5 d-flex justify-content-center bucket-box">
                            <Image
                              className="w-75"
                              src={data.img}
                              width={137}
                              height={222}
                              alt={data.name || "product"}
                            />
                          </div>
                          <h4
                            className="dark-text"
                            dangerouslySetInnerHTML={{ __html: data.name || "Product" }}
                          />
                          <p>{data.subname}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}
