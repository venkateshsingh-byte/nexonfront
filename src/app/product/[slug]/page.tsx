import Image from "next/image";
import type { Metadata } from "next";
import { MENU_GROUPS } from "@/app/lib/product-menu";
import ProductCSR from "@/app/components/product/ProductCSR";
import ProductSLIDER from "@/app/components/product/ProductSLIDER";
import BASE_URL from "@/app/config/base_url";

/* -------------------------------------------
   Types + helpers for metadata (SEO)
-------------------------------------------- */
type Product = {
  slug: string;
  product_name?: string;
  meta_title?: string;
  meta_desc?: string;
  product_desc?: string;
  product_single_image_banner?: string | null;
};

type BucketsResponse = {
  data?: Array<{
    buckets?: Array<{
      product?: { slug?: string } | null;
    }>;
  }>;
};

const IMG_BASE =
  process.env.NEXT_PUBLIC_PRODUCT_IMG_URL ||
  "http://localhost:4000/public/uploads/product_img/";

const fileUrl = (name?: string | null) => (name ? `${IMG_BASE}${name}` : "");
const stripHtml = (html?: string, max = 160) =>
  (html ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max) || "";

/* -------------------------------------------
   Fetch one product by slug (typed)
-------------------------------------------- */
async function fetchProduct(slug: string): Promise<Product | null> {
  // 1) preferred endpoint: by slug
  try {
    const r = await fetch(
      `${BASE_URL}/products/slug/${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );
    if (r.ok) {
      const j: unknown = await r.json();
      if (
        j &&
        typeof j === "object" &&
        ("data" in j || "product" in j)
      ) {
        const data = (j as { data?: unknown }).data;
        const product = (j as { product?: unknown }).product;
        if (data && typeof data === "object" && "slug" in (data as Product)) {
          return data as Product;
        }
        if (product && typeof product === "object" && "slug" in (product as Product)) {
          return product as Product;
        }
      }
    }
  } catch {
    /* ignore */
  }

  // 2) fallback: list all, find by slug
  try {
    const r = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
    if (!r.ok) return null;
    const j: unknown = await r.json();

    const list: Product[] = Array.isArray((j as { products?: unknown }).products)
      ? ((j as { products: Product[] }).products)
      : Array.isArray((j as { data?: unknown }).data)
      ? ((j as { data: Product[] }).data)
      : [];

    return list.find((p: Product) => p?.slug === slug) ?? null;
  } catch {
    return null;
  }
}

/* -------------------------------------------
   Static params (typed)
-------------------------------------------- */
const menuCategorySlugs = () =>
  Array.from(
    new Set(
      MENU_GROUPS.flatMap((g) => g.items.map((i) => i.slug.replace(/^\//, "")))
    )
  );

export const dynamicParams = false;

export async function generateStaticParams() {
  const cats = menuCategorySlugs();
  const slugs = new Set<string>();

  await Promise.all(
    cats.map(async (cat) => {
      try {
        const r = await fetch(
          `${BASE_URL}/colorbuckets/buckets/category/${encodeURIComponent(cat)}`
        );
        if (!r.ok) return;
        const j: BucketsResponse = await r.json();

        (j.data ?? []).forEach((sec) => {
          (sec.buckets ?? []).forEach((b) => {
            const s = b?.product?.slug;
            if (typeof s === "string" && s) slugs.add(s);
          });
        });
      } catch {
        /* ignore */
      }
    })
  );

  try {
    const r = await fetch(`${BASE_URL}/products`);
    if (r.ok) {
      const j: unknown = await r.json();

      const list: Product[] = Array.isArray((j as { products?: unknown }).products)
        ? ((j as { products: Product[] }).products)
        : Array.isArray((j as { data?: unknown }).data)
        ? ((j as { data: Product[] }).data)
        : [];

      list.forEach((p: Product) => {
        if (p?.slug) slugs.add(p.slug);
      });
    }
  } catch {
    /* ignore */
  }

  const params = Array.from(slugs).map((slug) => ({ slug }));
  return params.length ? params : [{ slug: "placeholder" }];
}

/* -------------------------------------------
   SEO: generateMetadata
-------------------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await fetchProduct(slug);

  const title =
    product?.meta_title || product?.product_name || `Product – ${slug}`;

  const description =
    product?.meta_desc ||
    stripHtml(product?.product_desc, 160) ||
    `Learn more about ${product?.product_name || slug}.`;

  const ogImage =
    fileUrl(product?.product_single_image_banner) ||
    "/nexontest/assets/images/product-banner.png";

  return {
    title,
    description,
    alternates: {
      canonical: `/product/${slug}`, // uses metadataBase to become absolute
    },
    openGraph: {
      title,
      description,
      url: `/product/${slug}`,
      images: [{ url: ogImage }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* -------------------------------------------
   Page (await params)
-------------------------------------------- */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <ProductCSR slug={slug} />
      <ProductSLIDER />

      <section className="product-section-footer section-space p-0">
        <div className="image">
          <Image
            src="/nexontest/assets/images/contact-footer.png"
            alt=""
            width={1905}
            height={1233}
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
              <a href="#" className="btn btn-outline-dark ">
                Book Free Consultation Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
