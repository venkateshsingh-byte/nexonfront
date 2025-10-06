"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BASE_URL from "@/app/config/base_url";

type TypeOfProduct = {
  _id: string;
  typeofproduct_name: string;
};

const capitalizeFirst = (s: string = "") =>
  s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

// Title-case words and keep capitalization in the id
const toId = (s: string = "") => {
  const cleaned = s.replace(/[^A-Za-z0-9]+/g, " ").trim();
  if (!cleaned) return "";
  return cleaned
    .split(" ")
    .filter(Boolean)
    .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join("-"); // e.g., "Luxury Plus" -> "Luxury-Plus"
};

export default function TypesOfProducts() {
  const [type, setType] = useState<TypeOfProduct[]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const api = await fetch(`${BASE_URL}/typeofproducts/`, { cache: "no-store" });
        const data = await api.json();
        setType(data?.typeofproduct || []);
      } catch {
        setType([]);
      }
    };
    fetchTypes();
  }, []);

  return (
    <nav className="product-nav">
      <ul>
        {type.map((item) => {
          const raw = item?.typeofproduct_name ?? "";
          const label = capitalizeFirst(raw);
          const id = toId(raw); // <-- keeps first letter capital (e.g., "Value")
          return (
            <li key={item._id}>
              <Link href={`#${id}`}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
