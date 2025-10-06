"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import BASE_URL from "@/app/config/base_url";

const FILE_BASE = process.env.NEXT_PUBLIC_PRODUCT_IMG_URL;
const fileUrl = (name?: string | null) => (name ? `${FILE_BASE}/${name}` : "");

type ApiResponse = {
  success: boolean;
  category: { cat_name: string; cat_url: string; cat_subname?: string; };
  data: {
    _id: string;
    buckets: Array<{
      product_small_img?: string;
      product_img?: string;
      product_bucket_title?: string;
      product: {
        _id: string;
        product_name: string;
        product_subname?: string;
        product_desc?: string;
        technical_datasheet?: string | null;
        benefit?: string;
        slug: string;
        typeofproduct: { _id: string; typeofproduct_name: string } | null;
      };
    }>;
  }[];
};

export default function BucketsCSR({ category }: { category: string }) {
  const [api, setApi] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setErr(null);

    fetch(`${BASE_URL}/colorbuckets/buckets/category/${encodeURIComponent(category)}`, {
      cache: "no-store",
    })
      .then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const json = (await r.json()) as ApiResponse;
        if (mounted) setApi(json);
      })
      .catch((e) => mounted && setErr(e.message || "Failed to load"))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [category]);

  const psClass = (i: number) => (i % 2 === 0 ? "ps1" : "ps2");
  const rightAligned = (i: number) => psClass(i) === "ps1";

  // Stable pane id per section + index
  const tabId = (secIdx: number, i: number) => `tab-${secIdx + 1}-${i + 1}`;

  // Active tab state per section
  const [activeTabs, setActiveTabs] = useState<Record<number, string>>({});

  // Guard so StrictMode in dev doesn’t re-initialize twice
  const didInit = useRef(false);
  useEffect(() => {
    if (!api?.data) return;
    if (didInit.current) return; // prevent double init
    const initial: Record<number, string> = {};
    api.data.forEach((section, secIdx) => {
      if (section?.buckets?.length) initial[secIdx] = tabId(secIdx, 0);  
    });
    setActiveTabs(initial);
    didInit.current = true;
  }, [api]);
  console.log("Check API",api)     
  if (loading || err || !api?.data?.length) return <p>Loading buckets...</p>;

  return (
    <>

      <section className="product-section1 section-space page-banner p-0 head-space">
        <div className="banner position-relative">
        {/* Background image */}
        <Image src="/nexontest/assets/images/product-banner.png" width={1905} height={661} alt="Banner" className="img-fluid" />
        {/* Overlay content */}
        <div className="container">
            <div className="row p-0 m-0">
              <div className="col-12 d-flex hm info">
                <div className="heading-content position-absolute">
                  <h2 className="text-white ">Paints That Do More <br /> Than Just Color</h2>
                  <p>Make every wall a statement—inside or out. Explore our range of high-performance interior and exterior paints designed for lasting beauty, protection and style.</p>
                  <div className="image w-100"><Image className="w-75" src="/nexontest/assets/images/bucket-bundel.png" width={471} height={160} alt="Paints That" /></div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      <section className="page-detail-heading bg-light">
        <div className="container">
            <div className="dark-text">
              <div className="d-flex flex-row hm info progression-light py-5"><p><Link href="/">Home</Link> </p>
                <div className="px-1 "><Image src="/nexontest/assets/images/progression-icon-dark.svg" width={20} height={21} alt="" /></div>
                <p className="active-page"><Link href={`/${api.category.cat_url}/`}>{api.category.cat_name} Paints</Link></p>
              </div>
            </div>
          
          <div className="top info">
            <h2>{api.category.cat_name} Paints</h2>
              <h5 className="dark-text remove_margin">{api?.category?.cat_subname}  </h5>
          </div>
        </div>
      </section>

       {api.data.map((section, secIdx) => {
        const buckets = section?.buckets || [];
        if (!buckets.length) return null;

        const sectionId =
          buckets[0]?.product?.typeofproduct?.typeofproduct_name || "not_available";

        return (
          <section
            key={section._id || secIdx}
            className={`section4 ${psClass(secIdx)} nav-section section-space py-5 bg-light ${
              secIdx === 0 ? "pt-0" : ""
            }`}
            id={sectionId}
          >
            <div className="container">
              <div className="btm position-relative mb-3">
                {/* BUCKET RAIL */}
                <div
                  className={`rows ${
                    rightAligned(secIdx) ? "bucket-container" : "bucket-container-left"
                  } my-3 position-absolute`}
                >
                  {buckets.map((b, i) => {
                    const id = tabId(secIdx, i);
                    const isActive = (activeTabs[secIdx] ?? tabId(secIdx, 0)) === id;
                    return (
                      <div
                        key={`sec${secIdx}-b${i}-pb`}
                        className={`paint-bucket ${isActive ? "active" : ""}`}
                        // IMPORTANT: remove data-target to avoid external tab JS firing
                        data-tab={id} // harmless attribute if you need a hook
                        onClick={() =>
                          setActiveTabs((prev) => ({
                            ...prev,
                            [secIdx]: id,
                          }))
                        }
                        role="button"
                        aria-label={`Open ${b.product?.product_name || `Bucket ${i + 1}`}`}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setActiveTabs((prev) => ({ ...prev, [secIdx]: id }));
                          }
                        }}
                      >
                        <Image
                          src={
                            b.product_small_img
                              ? fileUrl(b.product_small_img)
                              : rightAligned(secIdx)
                              ? "/nexontest/assets/images/imagepaint3.png"
                              : "/nexontest/assets/images/imagepaint2.png"
                          }
                          width={80}
                          height={rightAligned(secIdx) ? 107 : 106}
                          alt={b.product?.product_name || `Bucket ${i + 1}`}
                          unoptimized
                        />
                      </div>
                    );
                  })}
                </div>

                {/* TAB PANES */}
                <div className="tab-content">
                  {buckets.map((b, i) => {
                    const id = tabId(secIdx, i);
                    const isActive = (activeTabs[secIdx] ?? tabId(secIdx, 0)) === id;

                    const gridClass = rightAligned(secIdx)
                      ? "row content-right  d-flex justify-content-between gx-4"
                      : "row content-left d-flex justify-content-between align-items-start";

                    const imageCol = (
                      <div className="col-sm-5 p-0">
                        <div className="image">
                          <Image
                            src={
                              b.product_img
                                ? fileUrl(b.product_img)
                                : rightAligned(secIdx)
                                ? "/nexontest/assets/images/imagep1.png"
                                : "/nexontest/assets/images/image120.png"
                            }
                            width={rightAligned(secIdx) ? 540 : 1168}
                            height={rightAligned(secIdx) ? 416 : 900}
                            className="img-fluid"
                            alt={b.product?.product_subname || b.product?.product_name || "Image"}
                            unoptimized
                          />
                        </div>
                      </div>
                    );

                    const copyCol = (
                      <div className="col-sm-6">
                        <div className="rows hm ">
                          <h1
                            className="dark-text"
                            dangerouslySetInnerHTML={{
                              __html: b.product_bucket_title || b.product?.product_name || "Product",
                            }}
                          />
                          {b.product?.product_subname && (
                            <h6 className="dark-text">{b.product.product_subname}</h6>
                          )}

                          <div className="benefits_text">
                            {b.product?.benefit ? (
                              <div dangerouslySetInnerHTML={{ __html: b.product.benefit }} />
                            ) : null}
                          </div>

                          <div className="d-flex flex-wrap gap-3">
                            <div className="anc">
                              <Link
                                href={{ pathname: `/product/${b.product?.slug || ""}` }}
                                className="btn btn-outline-dark "
                              >
                                Discover{" "}
                                {(b.product_bucket_title ||
                                  b.product?.product_name ||
                                  "Product").replace(/<[^>]+>/g, "")}
                              </Link>
                            </div>

                            {b.product?.technical_datasheet && (
                              <div className="anc-opp gap-1">
                                <a
                                  href={fileUrl(b.product.technical_datasheet)}
                                  className="btn btn-outline-dark "
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i className="bi bi-download px-1"></i>
                                  Technical Datasheet
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );

                    return (
                      <div
                        key={`sec${secIdx}-pane${i}`}
                        id={id}
                        className={`tab-pane fade ${isActive ? "show active" : ""}`}
                        role="tabpanel"
                        aria-hidden={isActive ? "false" : "true"}
                      >
                        <div className={gridClass}>
                          {rightAligned(secIdx) ? (
                            <>
                              {imageCol}
                              {copyCol}
                            </>
                          ) : (
                            <>
                              {copyCol}
                              {imageCol}
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* /tab-content */}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
