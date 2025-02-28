import service1 from "../../public/img/service1.jpg";
import service2 from "../../public/img/service2.jpg";
import service3 from "../../public/img/service3.jpg";
import project1 from "../../public/img/project1.jpg";
import project2 from "../../public/img/project2.jpg";
import project3 from "../../public/img/project1.jpg";
import { FiFacebook } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import facebook from "../../public/img/facebook.svg";
import instagram from "../../public/img/instagram.svg";
import twitter from "../../public/img/twitter.svg";
export const navItems = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#about" },
  { label: "Product & Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];
export const SERVICES_CONTENT = [
  {
    title: "Kitchen Renovation",
    description:
      "Transform your kitchen into a modern, functional space with our comprehensive renovation services. From custom cabinetry to state-of-the-art appliances, we handle all aspects of kitchen remodeling.",
    image: service1,
    alt: "Kitchen Renovation",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Create a spa-like retreat in your home with our bathroom renovation services. We offer luxurious fixtures, custom tiling, and innovative designs to elevate your bathroom experience.",
    image: service2,
    alt: "Bathroom Renovation",
  },
  {
    title: "Living Room Renovation",
    description:
      "Update your living room with our expert renovation services. We offer custom designs, new flooring options, and stylish lighting solutions to create a warm and inviting space for your family and guests.",
    image: service3,
    alt: "Living Room Renovation",
  },
];
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Modern Kitchen Renovation",
    description:
      "A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
    image: project1,
    link: "#",
  },
  {
    id: 2,
    name: "Luxurious Bathroom Remodel",
    description:
      "Transformed an outdated bathroom into a spa-like retreat with marble tiling, a glass shower, and modern fixtures.",
    image: project2,
    link: "#",
  },
  {
    id: 3,
    name: "Outdoor Living Space",
    description:
      "Designed a beautiful outdoor living area, complete with a pergola, fire pit, and cozy seating for entertainment.",
    image: project3,
    link: "#",
  },
  {
    id: 4,
    name: "Elegant Living Room Update",
    description:
      "Updated a living room with new flooring, stylish lighting, and custom-built shelving units.",
    image: project2,
    link: "#",
  },
  {
    id: 5,
    name: "Basement Conversion",
    description:
      "Converted an unused basement into a modern, multi-functional space including a home theater, gym, and guest bedroom.",
    image: project1,
    link: "#",
  },
  {
    id: 6,
    name: "Home Office Transformation",
    description:
      "Created a sleek and functional home office, optimizing space with ergonomic furniture, ample storage, and modern decor.",
    image: project2,
    link: "#",
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
  { src: instagram, alt: "instagram logo", href: "https://www.instaram.com" },
];
