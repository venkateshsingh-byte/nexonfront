"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BASE_URL from "../config/base_url";

type Branch = {
  _id: string;
  branch_name?: string | null;
  slug_url?: string | null;
  branch_img?: string | null;
};

const slugify = (s: string) =>
  (s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const BRANCH_IMG_BASE =
  process.env.NEXT_PUBLIC_BRANCH_IMG_URL ||
  "http://localhost:4000/public/uploads/branch_img/";

export default function Page() {
  const [stores, setStores] = useState<Branch[]>([]);

  const fetchData = async () => {
    try {
      const urlFetch = await fetch(`${BASE_URL}/branchs`);
      const result = await urlFetch.json();
      const list: Branch[] = Array.isArray(result?.branch) ? result.branch : [];
      setStores(list);
    } catch (err) {
      console.log("Store Data can not find!", err);
      setStores([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="find-your-color-section1 section-space page-banner p-0">
        <div className="banner position-relative">
          <Image
            src="/nexontest/assets/images/find-your-color-banner.png"
            alt="Banner"
            className="img-fluid w-100"
            width={2880}
            height={1000}
          />
          <div className="container">
            <div className="row p-0 m-0">
              <div className=" d-flex hm info">
                <div className="heading-content position-absolute">
                  <h2 className="text-white ">Branch Locator</h2>
                  <p>
                    Bring every corner to life with colors that speak your soul.
                    From the calm of your bedroom to the spark of your kitchen,
                    explore curated palettes and creative setups that turn walls
                    into expressions of personality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="d-flex flex-row hm info progression pt-5 dark-text">
            <p>
              <Link href="/">Home </Link>
            </p>
            <div className="px-1 ">
              <Image
                src="/nexontest/assets/images/progression-icon-dark.svg"
                width={20}
                height={21}
                alt="Breadcrumbs"
              />
            </div>
            <p className="active-page">Branch Locator</p>
          </div>
        </div>  
      </section>

      <section className="b-l-section2  pt-0">
        <div className="container">
          <div className="row hm info dark-text">
            <h3 className="my-5 fw-bold fs-2">Explore stores by States</h3>

            <div className="row col-12">
              {stores.map((item, idx) => {
                const safeSlug = encodeURIComponent(
                  (item.slug_url ?? slugify(item.branch_name ?? "")).trim()
                );
                const imgSrc = item.branch_img
                  ? `${BRANCH_IMG_BASE}${item.branch_img}`
                  : "/nexontest/assets/images/branch-loc-img1.png";

                return (
                  <div className="col-md-4 my-2" key={item._id ?? `${idx}`}>
                    <Link href={`/branch-locator/${safeSlug}`}>
                      <Image
                        className="w-100"
                        src={imgSrc}
                        width={408}
                        height={302}
                        alt={item.branch_name || "Branch"}
                      />
                      <p className="fw-semibold my-1">
                        {item.branch_name || "Andhra Pradesh"}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="col-12 row my-5">
              <div className="col-md-5 hm info">
                <div>
                  <h4 className="fs-4 fw-bold">Regd. &amp; Corporate Office</h4>
                  <div className="d-flex flex-row align-items-start">
                    <div>
                      <i className="bi bi-geo-alt-fill me-2 text-danger mt-1" />
                    </div>
                    <p className="text-start">
                      8-2-293/K/5 &amp; Plot No. 5, 3rd Floor, Kamalapuri
                      Colony, Hyderabad- 500073
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="fs-4 fw-bold">Factory</h4>
                  <div className="d-flex flex-row">
                    <div>
                      <i className="bi bi-geo-alt-fill me-2 text-danger mt-1" />
                    </div>
                    <p className="text-start">
                      8-2-293/K/5 &amp; Plot No. 5, 3rd Floor, Kamalapuri
                      Colony, Hyderabad- 500073
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <div>
                      <i className="bi bi-telephone-fill me-2 text-primary" />
                    </div>
                    <p>1800-120-8200</p>
                  </div>
                  <div className="d-flex flex-row">
                    <div>
                      <i className="bi bi-envelope-fill me-2 text-success" />
                    </div>
                    <p>care@nexonpaints.com</p>
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <div>
                  <Image
                    className="w-100"
                    src="/nexontest/assets/images/branch-loc-img9.png"
                    width={732}
                    height={427}
                    alt="Corporate Office"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section-footer section-space p-0">
        <div className="">
          <div className="image m-0 p-0">
            <Image
              src="/nexontest/assets/images/imagepfooter.png"
              width={1320}
              height={687}
              alt="Corporate Office"
            />
            <div className="overlay">
              <h2 className="hm info">
                Looking for <br />
                Painting Services?
              </h2>
              <h5>
                Experience world-class enterprise coating <br />
                solutions with Nexon’s expertise.
              </h5>
              <div className="anc">
                <Link href="#" className="btn btn-outline-dark ">
                  Book Free Consultation Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
