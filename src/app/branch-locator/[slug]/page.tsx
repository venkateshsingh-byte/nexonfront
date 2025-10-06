// app/branch-locator/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BASE_URL from "@/app/config/base_url";

type Branch = {
  _id: string;
  branch_name: string;
  slug_url?: string;
  branch_img?: string | null;
  branch_map?: string | null;
  branch_all_add?: string | null; // HTML
  meta_title?: string | null;
  meta_desc?: string | null;
};

const IMG_BASE =
  process.env.NEXT_PUBLIC_BRANCH_IMG_URL ||
  "http://localhost:4000/public/uploads/branch_img/";

const imgUrl = (name?: string | null) =>
  name ? `${IMG_BASE}${name}` : "/nexontest/assets/images/branch-loc-img1.png";

const slugify = (s: string) =>
  (s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// --- Fetch a single branch by slug ---
async function fetchBranch(slug: string): Promise<Branch | null> {
  // direct-by-slug
  try {
    const r = await fetch(`${BASE_URL}/branchs/slug/${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (r.ok) {
      const j = await r.json();
      const b = j?.branch || j?.data;
      if (b && !Array.isArray(b)) return b as Branch;
    }
  } catch {}

  // fallback: all -> find locally
  try {
    const r = await fetch(`${BASE_URL}/branchs`, { cache: "no-store" });
    if (!r.ok) return null;
    const j = await r.json();
    const list: Branch[] = Array.isArray(j?.branch) ? j.branch : [];
    const found =
      list.find((b) => b.slug_url === slug) ||
      list.find((b) => slugify(b.branch_name) === slug);
    return found || null;
  } catch {
    return null;
  }
}

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const r = await fetch(`${BASE_URL}/branchs`, { cache: "no-store" });
    if (!r.ok) return [{ slug: "placeholder" }];
    const j = await r.json();
    const list: Branch[] = Array.isArray(j?.branch) ? j.branch : [];
    const slugs = list
      .map((b) => b.slug_url || slugify(b.branch_name))
      .filter(Boolean) as string[];
    return slugs.length ? slugs.map((slug) => ({ slug })) : [{ slug: "placeholder" }];
  } catch {
    return [{ slug: "placeholder" }];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = await fetchBranch(slug);

  const title =
    branch?.meta_title ||
    (branch?.branch_name ? `${branch.branch_name} – Branch` : `Branch – ${slug}`);

  const description =
    branch?.meta_desc || `Find Nexon branch: ${branch?.branch_name || slug}.`;

  const image = imgUrl(branch?.branch_img);

  return {
    title,
    description,
    alternates: { canonical: `/branch/${slug}` },
    openGraph: {
      title,
      description,
      url: `/branch/${slug}`,
      images: [{ url: image }],
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = await fetchBranch(slug);

  if (!branch) {
    return (
      <div className="container my-5">
        <p>Branch not found.</p>
      </div>
    );
  }

  const pageTitle = branch.branch_name || "Branch";

  return (
    <>
      <section className="find-your-color-section1 section-space page-banner p-0 head-space">
        <div className="banner position-relative">
          <Image
            src="/nexontest/assets/images/branch-detail-banner.png"
            alt="Banner"
            className="img-fluid"
            width={1906}
            height={660}
          />
          <div className="container">
            <div className="row p-0 m-0">
              <div className="col-12 d-flex hm info">
                <div className="heading-content position-absolute">
                  <h2 className="text-white text-start">Explore Our Stores</h2>
                  <p>
                    Step into Nexon Paints store and discover design inspiration,
                    expert help, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile fallback image */}
        <div className="d-lg-none">
          <Image
            className="w-100"
            src="/nexontest/assets/images/product-sm-banner.png"
            width={300}
            height={200}
            alt=""
          />
        </div>
      </section>

      {/* ↓↓↓ The line that errored previously is normal JSX */}
      <section className="breadcrumb dark-text">
        <div className="container">
          <div className="d-flex flex-row hm info progression py-5">
            <Link href="/" className="dark-text">Home</Link>
            <div className="px-1">
              <Image
                src="/nexontest/assets/images/progression-icon-dark.svg"
                width={20}
                height={21}
                alt=""
              />
            </div>
            <Link href="/branch-locator" className="dark-text">Branch Locator</Link>
            <div className="px-1">
              <Image
                src="/nexontest/assets/images/progression-icon-dark.svg"
                width={20}
                height={21}
                alt=""
              />
            </div>
            <span className="active-page">{pageTitle}</span>
          </div>
        </div>
      </section>

      <section className="section4 section-space py-5 pt-0">
        <div className="container section-explore-store">
          <div className="btm">
            <div className="row office-detail d-flex justify-content-between gx-4">
              <div className="col-sm-6 sticky-col p-0 pt-3 order-1 order-md-0">
                <div className="image">
                  {branch.branch_map ? (
                    <iframe
                        src={branch.branch_map}
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        title={`${branch.branch_name || "Branch"} location map`}
                    />
                    ) : null}


                </div>
              </div>

              <div className="col-sm-6 p-3">
                <div className="rows info">
                  <h6 className="dark-text">Showing results for stores in <b>{pageTitle}</b></h6>

                  <div className="detail-bx">
                    <div className="part-division hm info dark-text pb-3">
                      {branch.branch_all_add ? (
                        <div dangerouslySetInnerHTML={{ __html: branch.branch_all_add }} />
                      ) : (
                        <p>Address details will be available soon.</p>
                      )}
                    </div>
                  </div>

                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="b-l-section2 section-space">
        <div className="container">
          <div className="row hm info dark-text">
            <div className="col-12 row office-detail align-items-center justify-content-between">
              <div className="col-md-4 hm info order-2 order-md-0">
                <div>
                  <h4 className="fw-bold">Regd. &amp; Corporate Office</h4>
                  <div className="d-flex flex-row align-items-start">
                    <div className="m-2">
                    <i className="bi bi-geo-alt-fill me-2 text-danger mt-1"></i>
                    </div>
                    <p className="text-start">
                      8-2-293/K/5 &amp; Plot No. 5, 3rd Floor, Kamalapuri Colony,
                      Hyderabad- 500073
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="fw-bold">Factory</h4>
                  <div className="d-flex flex-row">
                    <div className="m-2"><i className="bi bi-geo-alt-fill me-2 text-danger mt-1"></i></div>
                    <p className="text-start">
                      8-2-293/K/5 &amp; Plot No. 5, 3rd Floor, Kamalapuri Colony,
                      Hyderabad- 500073
                    </p>
                  </div>

                  <div className="d-flex flex-row">
                    <div className="m-2"><i className="bi bi-telephone-fill me-2 text-primary"></i></div>
                    <p className="text-start">1800-120-8200</p>
                  </div>

                  <div className="d-flex flex-row">
                    <div className="m-2"><i className="bi bi-envelope-fill me-2 text-success"></i></div>
                    <p className="text-start">care@nexonpaints.com</p>
                  </div>
                </div>
              </div>

              <div className="col-md-7 p-0 m-0 order-0">
                <div className="p-0 m-0">
                  <Image
                    className="w-100"
                    src="/nexontest/assets/images/branch-loc-img9.png"
                    width={756}
                    height={441}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section-footer section-space p-0">
        <div className="image m-0 p-0">
          <Image
            src="/nexontest/assets/images/contact-footer.png"
            width={1905}
            height={1233}
            alt=""
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
