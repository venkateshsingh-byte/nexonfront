"use client";
import React, { useState } from "react";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "What type of paint should I use for interior vs. exterior walls?",
    a: "Use interior emulsions for indoor walls (low odor, washable) and weather-resistant exterior emulsions for outdoor walls to withstand UV, rain, and dust.",
  },
  {
    q: "How long does paint typically last on walls before needing a repaint?",
    a: "On average 3–5 years for interiors (depending on traffic and maintenance) and 4–7 years for exteriors (climate and exposure matter).",
  },
  {
    q: "What is the difference between matte, satin, and glossy finishes?",
    a: "Matte hides imperfections; satin offers a soft sheen and is more washable; gloss is highly reflective, durable, and easy to clean.",
  },
  {
    q: "Is Nexon Paints eco-friendly and safe for children or pets?",
    a: "Yes—our low-VOC, eco-conscious formulations are designed to be safer for indoor environments when used as directed.",
  },
  {
    q: "Can you help me choose the right color for my space?",
    a: "Absolutely! Try our visualizer, browse inspirations, or book a free color consultation to find a perfect match.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="section7 section-space py-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="info d-flex justify-content-center align-items-center">
            <div className="col-lg-12 justify-content-center">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="faq">  
              {FAQS.map((item, i) => {
                const isOpen = openIndex === i;
                const regionId = `faq-panel-${i}`;
                const btnId = `faq-btn-${i}`;

                return (
                  <div className="eachFaq" key={i}>
                    <button
                      id={btnId}
                      type="button"
                      className="d-flex flex-row justify-content-between title w-100 text-start"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={regionId}
                    >
                      <h5 className="title m-0">{item.q}</h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}
                        aria-hidden="true"
                      >
                        <path
                          d="M24 12L16 20L8 12"
                          stroke="#121212"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div
                      id={regionId}
                      role="region"
                      aria-labelledby={btnId}
                      className="accordion-content"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
