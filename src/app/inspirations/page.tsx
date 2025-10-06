"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BASE_URL from "@/app/config/base_url";

type InspiredItem = {
  _id: string;
  inspired_name?: string;
  inspired_full_img?: string | null;
  inspired_small_img?: string | null;
  inspiredcategory?: {
    _id: string;
    cat_inspired_name?: string;
  };
};

const IMG_BASE =
  process.env.NEXT_PUBLIC_INSPIRED_IMG_URL ||
  "http://localhost:4000/public/uploads/inspired_img/";

const fileUrl = (name?: string | null) =>
  name ? `${IMG_BASE}${name}` : "/nexontest/assets/images/image80.png";

const normalize = (s?: string) => (s ?? "").trim();

export default function InspirationsDynamic() {
  const [items, setItems] = useState<InspiredItem[]>([]);
  const [active, setActive] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  // load-more state
  const pageSize = 6;
  const [visibleCount, setVisibleCount] = useState<number>(pageSize);

  useEffect(() => {
    let on = true;
    (async () => {
      try {
        setLoading(true);
        const r = await fetch(`${BASE_URL}/inspireds`, { cache: "no-store" });
        const j = await r.json();
        const list: InspiredItem[] = Array.isArray(j?.inspired) ? j.inspired : [];
        if (on) setItems(list);
      } catch (e) {
        if (on) setItems([]);
        console.error("Fetch inspireds failed:", e);
      } finally {
        if (on) setLoading(false);
      }
    })();
    return () => {
      on = false;
    };
  }, []);

  // Build categories and counts
  const { categories } = useMemo(() => {
    const set = new Set<string>();
    const map = new Map<string, number>();
    items.forEach((it) => {
      const name = normalize(it.inspiredcategory?.cat_inspired_name);
      if (!name) return;
      set.add(name);
      map.set(name, (map.get(name) ?? 0) + 1);
    });
    const cats = ["all", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
    const total = items.length;
    return { categories: cats};
  }, [items]);

  // Items for current tab
  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter(
      (it) => normalize(it.inspiredcategory?.cat_inspired_name) === active
    );
  }, [items, active]);

  // Reset visibleCount when tab changes or data changes
  useEffect(() => {
    setVisibleCount(pageSize);
  }, [active, items.length]);

  // Slice for current page
  const visible = filtered.slice(0, visibleCount);

  const onLoadMore = () => {
    setVisibleCount((c) => Math.min(c + pageSize, filtered.length));
  };

  if (loading) return <p className="text-center py-5">Loading inspirations…</p>;

  return (
    <>
      <section className="find-your-color-section1 section-space page-banner p-0 head-space">
        <div className="banner position-relative">
          <Image
            src="/nexontest/assets/images/find-your-color-banner.png"
            alt="Banner"
            className="img-fluid w-100"
            width={1905}
            height={661}
          />
          <div className="container">
            <div className="row p-0 m-0">
              <div className="d-flex hm info">
                <div className="heading-content position-absolute">
                  <h2 className="text-white">Inspirations</h2>
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
                {/* breadcrumb */}
                <div className="row hm info dark-text color-description justify-content-center">
                    <div className="d-flex flex-row hm info progression py-5 dark-text">
                    <p className="mb-0">
                        <Link href="/">Home</Link>
                    </p>
                    <div className="px-1">
                        <Image
                        src="/nexontest/assets/images/progression-icon-dark.svg"
                        width={20}
                        height={21}
                        alt="divider"
                        />
                    </div>
                    <p className="active-page mb-0">Inspirations</p>
                    </div>
                </div>
            </div>        
      </section>

      <section className="inspiration-section2 section-space pt-0">
        <div className="container">
          
          <div className="row hm info dark-text color-description justify-content-center">
            {/* dynamic tabs */}
            <div className="page-navigator row gap-3 my-3 pb-4" role="tablist">
              {categories.map((cat) => {
                const isActive = active === cat;
                const label = cat === "all" ? "All" : cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={`tabler-icon-search-parent justify-content-center ${
                      isActive ? "active-button" : ""
                    }`}
                    aria-selected={isActive}
                  >
                    <div className={`filters ${isActive ? "target-button" : ""}`}>
                      {label} 
                    </div>
                  </button>
                );
              })}
            </div>

            <h3>{active === "all" ? "All Inspirations" : active}</h3>

            {/* grid */}
            <div className="row gy-4">
                {visible.length === 0 && (
                    <div className="col-12">
                    <p className="text-center py-4">No inspirations in this category yet.</p>
                    </div>
                )}

                {visible.map((it) => (
                    <div className="col-md-6 position-relative parent" key={it._id}>
                    {/* Image link (change href if you have a details page) */}
                    <Link href="#" className="d-block image rounded-3 overflow-hidden" aria-label={it.inspired_name || "Inspiration"}>
                        <Image
                        className="w-100"
                        src={fileUrl(it.inspired_full_img)}
                        alt={it.inspired_name || "Inspiration"}
                        width={624}
                        height={446}
                        unoptimized
                        />
                    </Link>

                    {/* Color/name row */}
                    <div className="color-code-box d-flex flex-row align-items-center mt-2">
                        {/* leading spacer anchor in your markup was empty; removed as it has no purpose */}
                        <Link href="#" className="me-2" aria-label="Color pin">
                        <div className="icon p-0 m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={34} viewBox="0 0 25 34" fill="none">
                            <path
                                d="M12.2369 0.0317619C12.4955 -0.0507404 12.7655 0.030647 12.9055 0.239132C16.0457 4.84254 19.3309 9.47716 21.9122 14.3537C24.4543 19.1556 26.6432 23.5438 23.2937 28.5865C18.4894 35.8199 6.42969 35.7998 1.67972 28.5541C-1.58785 23.5717 0.496333 19.2871 2.98423 14.541C5.61217 9.52956 9.01474 4.75334 12.2369 0.0317619Z"
                                fill="red"
                            />
                            </svg>
                        </div>
                        </Link>

                        <div className="d-flex flex-column">
                        <Link href="#" className="text-decoration-none">
                            {it.inspired_name ? <p className="mb-0 fw-semibold">{it.inspired_name}</p> : null}
                            {/* replace with your real color code if API provides it */}
                            <span className="text-muted small">#aafsfs</span>
                        </Link>
                        </div>
                    </div>

                    {/* Visualize overlay as a button for accessibility */}
                    <button
                        type="button"
                        className="visualize-your-text d-flex flex-column justify-content-center align-items-center position-absolute"
                        onClick={() => (window.location.href = "#")}
                        style={{ cursor: "pointer" }}
                        aria-label="Visualize this color"
                    >
                        <Image src="/nexontest/assets/images/visualize-your-text.svg" width={57} height={32} alt="Visualize" />
                        <p className="mb-0">Visualize this Color</p>
                    </button>
                    </div>
                ))}
                </div>


            {/* Load More */}
            {visible.length < filtered.length && (
              <div className="text-center mt-3">
                <button className="btn btn-outline-dark" onClick={onLoadMore}>
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
