// lib/menu.ts
export type MenuItem = { name: string; slug: string };

export const MENU_GROUPS: Array<{ heading: string; items: MenuItem[] }> = [
  {
    heading: "Top Coat Paints",
    items: [
      { name: "Interior Wall",  slug: "/interior-wall" },
      { name: "Exterior Wall",  slug: "/exterior-wall" },
      { name: "Ceiling",        slug: "/ceiling" },
      { name: "Metallic Paint", slug: "/metallic-paint" },
      { name: "Floor",          slug: "/floor" },
    ],
  },
  {
    heading: "Waterproof Coating",
    items: [
      { name: "Roof & Walls",   slug: "/roof-and-wall" },
    ],
  },
  {
    heading: "Primer",
    items: [
      { name: "Interior Primer",        slug: "/interior-primer" },
      { name: "Exterior Primer",        slug: "/exterior-primer" },
      { name: "Interior & Exterior",    slug: "/interior-and-exterior" },
    ],
  },
  {
    heading: "Oil Based",
    items: [
      { name: "Metal Paint",     slug: "/metal-paint" },
      { name: "Metal Primer",    slug: "/metal-primer" },
      { name: "Wood Finishes",   slug: "/wood-finishes" },
    ],
  },
  {
    heading: "Putty & Texture",
    items: [
      { name: "Water Proof Putty", slug: "/water-proof-putty" },
      { name: "Acrylic Putty",     slug: "/acrylic-putty" },
      { name: "Texture",           slug: "/texture" },
    ],
  },
];
