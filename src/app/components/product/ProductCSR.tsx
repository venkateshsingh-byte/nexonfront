"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BASE_URL from "@/app/config/base_url";

const FILE_BASE =
  process.env.NEXT_PUBLIC_PRODUCT_IMG_URL ||
  "http://localhost:4000/public/uploads/product_img";

const fileUrl = (name?: string | null) => (name ? `${FILE_BASE}/${name}` : "");

type Product = {
  slug: string;
  product_name: string;
  product_subname?: string;
  product_desc?: string;
  benefit?: string;
  application_process?: string;
  technical_datasheet?: string | null;
  warranty_document?: string | null;
  green_pro_certificate?: string | null;
  product_img?: string | null;
  product_single_image_banner?: string | null;
  product_single_image_banner_small?: string | null;
};

// ---- type guards ----
function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}
function isProduct(v: unknown): v is Product {
  return isRecord(v) && typeof v.slug === "string";
}
function isProductArray(v: unknown): v is Product[] {
  return Array.isArray(v) && v.every(isProduct);
}

export default function ProductCSR({ slug }: { slug: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let on = true;
    setLoading(true);

    const tryEndpoints = async (): Promise<Product | null> => {
      // 1) common “by slug” endpoint(s)
      const candidates = [
        `${BASE_URL}/products/slug/${encodeURIComponent(slug)}`,
      ];

      for (const url of candidates) {
        try {
          const r = await fetch(url, { cache: "no-store" });
          if (!r.ok) continue;
          const raw: unknown = await r.json();
          if (isRecord(raw)) {
            const maybeData = (raw as { data?: unknown }).data;
            if (isProduct(maybeData)) return maybeData;

            const maybeProduct = (raw as { product?: unknown }).product;
            if (isProduct(maybeProduct)) return maybeProduct;
          }
        } catch {
          /* ignore and try next */
        }
      }

      // 2) fallback: fetch all and find by slug
      try {
        const r = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
        if (!r.ok) return null;
        const raw: unknown = await r.json();
        if (isRecord(raw)) {
          const list =
            (isProductArray((raw as { products?: unknown }).products) &&
              (raw as { products: Product[] }).products) ||
            (isProductArray((raw as { data?: unknown }).data) &&
              (raw as { data: Product[] }).data) ||
            [];
          const found = list.find((p) => p.slug === slug);
          return found ?? null;
        }
        return null;
      } catch {
        return null;
      }
    };

    (async () => {
      const p = await tryEndpoints();
      if (on) setProduct(p);
      if (on) setLoading(false);
    })();

    return () => {
      on = false;
    };
  }, [slug]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <section className="rub-des-section1 section-space page-banner p-0 head-space">
        <div className="banner position-relative">
          <Image
            src={
              product.product_single_image_banner
                ? fileUrl(product.product_single_image_banner)
                : "/nexontest/assets/images/product-banner.png"
            }
            alt="Banner"
            className="img-fluid w-100"
            width={1905}
            height={661}
            unoptimized
          />
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex hm info">
                <div className="heading-content position-absolute">
                  <h2
                    className="text-white"
                    dangerouslySetInnerHTML={{
                      __html: product.product_name || "Product",
                    }}
                  />
                  <p>{product.product_subname}</p>
                  <div className="image w-100">
                    <Image
                      className="w-50"
                      src={
                        product.product_single_image_banner_small
                          ? fileUrl(product.product_single_image_banner_small)
                          : "/nexontest/assets/images/bucket-bundel.png"
                      }
                      width={219}
                      height={191}
                      alt=""
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section4 section-space py-5 bg-light">
        <div className="container">
          <div className="btm">
            <div className="row d-flex justify-content-between gx-4">
              <div className="col-sm-6 sticky-col pt-3">
                <div className="image">
                  <Image
                    src={
                      product.product_img
                        ? fileUrl(product.product_img)
                        : "/nexontest/assets/images/imagep1.png"
                    }
                    width={624}
                    height={481}
                    className="img-fluid"
                    alt=""
                    unoptimized
                  />
                </div>
                <div className="d-flex justify-content-center gap-4">
                  <div className="anc ">
                    <a href="#" className="btn btn-outline-dark ">
                      <i className="bi bi-eye" />
                      Visualize Your Room<sup>®</sup>
                    </a>
                  </div>
                  <div className="anc-opp">
                    <a href="#" className="btn btn-outline-dark ">
                      Book Free Consultation
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 p-3">
                <div className="rows info">
                  <h1
                    className="dark-text"
                    dangerouslySetInnerHTML={{
                      __html: product.product_name || "Product",
                    }}
                  />
                  <h6 className="dark-text">{product.product_subname}</h6>

                  <div className="part-division">
                    <div className="product_desc">
                      {product.product_desc ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.product_desc,
                          }}
                        />
                      ) : null}
                    </div>
                  </div>

                  <div className="part-division">
                    <h5 className="text-dark">Product Specs</h5>
                    <div className="col-12 d-flex justify-content-start gap-3">
                      <div className="col-sm-4 p-0 pro-des-anchor fw-semibold">
                        <i className="bi bi-download px-1" />
                        {product.technical_datasheet ? (
                          <a
                            href={fileUrl(product.technical_datasheet)}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                          >
                            Technical Datasheet
                          </a>
                        ) : (
                          <span>Technical Datasheet</span>
                        )}
                      </div>
                      <div className="col-sm-4 p-0 pro-des-anchor fw-semibold">
                        <i className="bi bi-download px-1" />
                        {product.warranty_document ? (
                          <a
                            href={fileUrl(product.warranty_document)}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                          >
                            Warranty Document
                          </a>
                        ) : (
                          <span>Warranty Document</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="benefits part-division">
                    <h5 className="dark-text">Benefits</h5>
                    <div className="benefits_text">
                      {product.benefit ? (
                        <div
                          dangerouslySetInnerHTML={{ __html: product.benefit }}
                        />
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-3">
                    <h5 className="dark-text">Green Pro Certified</h5>
                    <div>
                      <Image
                        className="w-100"
                        src={
                          product.green_pro_certificate
                            ? fileUrl(product.green_pro_certificate)
                            : "/nexontest/assets/images/image120.png"
                        }
                        width={616}
                        height={470}
                        alt=""
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.application_process && (
        <section className="rub-des-section2 section-space">
          <div className="container">
            <div className="row hm info dark-text">
              <h3 className="my-3 fw-semibold">Application Process</h3>
              <div className="applicatyion_process">
                <div
                  className="col-12 row hm info"
                  dangerouslySetInnerHTML={{
                    __html: product.application_process,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
