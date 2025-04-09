import rmc from "../../public/img/ready_mix.jpg";
import design_mix from "../../public/img/design_mix.jpg";
import bulk from "../../public/img/bulk.jpg";
import onsite from "../../public/img/onsite.jpg";
import pump from "../../public/img/pump.jpg";
import support from "../../public/img/support.jpg";
import facebook from "../../public/img/facebook.svg";
import instagram from "../../public/img/instagram.svg";
import twitter from "../../public/img/twitter.svg";
import fRC from "../../public/img/FRC.webp";
import green from "../../public/img/Green-Concrete.jpg";
import high from "../../public/img/highstrength.webp";
import light from "../../public/img/light.jpg";
import previous from "../../public/img/previous.jpeg";
import ssc from "../../public/img/ssc.webp";
import waterproof from "../../public/img/waterproof.jpg";
import design from "../../public/img/design.jpg";
import concreteM from "../../public/img/concreteM.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];
export const SERVICES_CONTENT = [
  {
    title: "Ready Mix Concrete Supply",
    description:
      "Consistent, high-grade concrete delivered to your site on time.",
    image: rmc,
    alt: "Ready Mix Concrete Supply",
  },
  {
    title: "Custom Concrete Mix Design",
    description:
      "Mixes tailored to meet project-specific strength and durability requirements.",
    image: design_mix,
    alt: "Custom Concrete Mix Design",
  },
  {
    title: "On-Site Delivery",
    description:
      "Fleet of transit mixers for prompt and safe delivery to your construction site.",
    image: onsite,
    alt: "On-Site Delivery",
  },
  {
    title: "Pumping Services",
    description:
      "Concrete pump services for efficient and hassle-free placement, even in hard-to-reach areas.",
    image: pump,
    alt: "Pumping Services",
  },
  {
    title: "Technical Support",
    description:
      "Expert consultation and quality control support to ensure the right mix and application.",
    image: support,
    alt: "Technical Support",
  },
  {
    title: "Bulk Supply for Infrastructure Projects",
    description:
      "Large-scale supply for roads, bridges, industrial and commercial projects.",
    image: bulk,
    alt: "Bulk Supply for Infrastructure Projects",
  },
];
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "M-10 to M-50 Grade Concrete",
    description:
      "All standard mix grades as per project requirements (M-10, M-15, M-20, M-25, M-30… up to M-50)",
    image: concreteM,
    link: "",
  },
  {
    id: 2,
    name: "Design Mix Concrete",
    description:
      "Customized mixes designed by expert engineers for specific structural needs.",
    image: design,
    link: "",
  },
  {
    id: 3,
    name: "Self-Compacting Concrete (SCC)",
    description:
      "Highly flowable concrete for complex structures and congested reinforcement.",
    image: ssc,
    link: "",
  },
  {
    id: 4,
    name: "High Strength Concrete",
    description:
      "Special mixes for high-rise buildings, bridges, and heavy-load structures.",
    image: high,
    link: "",
  },
  {
    id: 5,
    name: "Fiber Reinforced Concrete (FRC)",
    description:
      "Concrete mixed with steel, glass, or synthetic fibers for added durability.",
    image: fRC,
    link: "",
  },
  {
    id: 6,
    name: "Lightweight Concrete",
    description:
      "Used for insulation and non-structural elements, reducing the dead load.",
    image: light,
    link: "",
  },
  {
    id: 7,
    name: "Pervious Concrete",
    description:
      "Eco-friendly concrete that allows water to pass through, used for pavements and drainage solutions.",
    image: previous,
    link: "",
  },
  {
    id: 8,
    name: "Waterproof Concrete",
    description: "For basements, tanks, and structures exposed to moisture.",
    image: waterproof,
    link: "",
  },
  {
    id: 9,
    name: "Green Concrete",
    description:
      "Sustainable concrete mix using recycled or eco-friendly materials.",
    image: green,
    link: "",
  },
];
export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo", href: "https://www.facebook.com" },
  { src: twitter, alt: "twitter logo", href: "https://www.twitter.com" },
  { src: instagram, alt: "instagram logo", href: "https://www.instagram.com" },
];
