// app/[category]/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import BucketsCSR from "@/app/components/category/BucketsCSR";
import { MENU_GROUPS } from "@/app/lib/product-menu";
import TypesOfProducts from "@/app/components/category/TypesOfProducts";
import BASE_URL from "@/app/config/base_url";

/* ---------------- Helpers ---------------- */
const stripHtml = (html?: string, max = 160) =>
  (html ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max) || "";

const menuCategorySlugs = (): string[] =>
  Array.from(
    new Set(
      MENU_GROUPS.flatMap((g) => g.items.map((i) => i.slug.replace(/^\//, "")))
    )
  );

export const dynamicParams = false;

/* ------ Static params (unchanged) ------ */
export function generateStaticParams() {
  const allCats = menuCategorySlugs();
  const cats = allCats.length ? allCats : ["placeholder"];
  return cats.map((category) => ({ category }));
}

/* ------ SEO: generateMetadata ------ */
type BucketsApi = {
  category?: { cat_name?: string; cat_url?: string; cat_subname?: string; meta_title?: string; meta_desc?: string };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  // Use your buckets endpoint (it already returns a `category` object)
  let catName = category;
  let metaTitle: string | undefined;
  let metaDesc: string | undefined;

  try {
    const r = await fetch(
      `${BASE_URL}/colorbuckets/buckets/category/${encodeURIComponent(category)}`,
      { cache: "no-store" }
    );
    if (r.ok) {
      const j = (await r.json()) as BucketsApi;
      catName = j?.category?.cat_name || category;
      // Prefer API-provided meta, otherwise build it
      metaTitle =
        j?.category?.meta_title ||
        `${catName} Paints | Nexon`;
      metaDesc =
        j?.category?.meta_desc ||
        stripHtml(j?.category?.cat_subname, 160) ||
        `Explore ${catName} paints by Nexon — high-performance finishes for long-lasting beauty and protection.`;
    }
  } catch {
    // fallbacks
    metaTitle = `${catName} Paints | Nexon`;
    metaDesc = `Explore ${catName} paints by Nexon — high-performance finishes for long-lasting beauty and protection.`;
  }

  return {
    title: metaTitle,
    description: metaDesc,
    alternates: {
      canonical: `/${category}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `/${category}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: metaTitle,
      description: metaDesc,
    },
  };
}

/* ------ Page (await params) ------ */
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <>
      <BucketsCSR category={category} />

      <section className="section5 section-space py-5">
        <div className="container">
          <div className="top info mb-4 text-center">
            <h2 className="fw-bold">
              Why Choose Nexon <br /> Paints for Your Home?
            </h2>
            <p>
              Because your walls deserve the best. Everything <br /> your home
              needs in every color you love.
            </p>
          </div>
          <div className="middle d-flex justify-content-center align-items-center gap-5 flex-wrap">
            <div className="text-center">
              <Image src="/nexontest/assets/images/image60.svg" width={100} height={100} alt="Washable" />
              <p>Washable</p>
            </div>
            <div className="text-center">
              <Image src="/nexontest/assets/images/image61.svg" width={100} height={100} alt="Long Lasting" />
              <p>Long Lasting</p>
            </div>
            <div className="text-center">
              <Image src="/nexontest/assets/images/image62.svg" width={100} height={100} alt="Stain Free" />
              <p>Stain Free</p>
            </div>
            <div className="text-center">
              <Image src="/nexontest/assets/images/image63.svg" width={100} height={100} alt="Eco-Friendly" />
              <p>Eco-Friendly</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section-footer section-space p-0">
        <div className="image">
          <Image
            src="/nexontest/assets/images/contact-footer.png"
            width={1905}
            height={1233}
            alt="Looking"
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

      <TypesOfProducts />
    </>
  );
}
  