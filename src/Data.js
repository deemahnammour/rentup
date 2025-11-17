import {
  faLightbulb,
  faShoppingBag,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import feat1 from "./component/images/f1.png";
import feat2 from "./component/images/f2.png";
import feat3 from "./component/images/f3.png";
import feat4 from "./component/images/f4.png";
import rec1 from "./component/images/r1.png";
import rec2 from "./component/images/r2.png";
import rec3 from "./component/images/r3.png";
import rec4 from "./component/images/r4.png";
import rec5 from "./component/images/r5.png";
import rec6 from "./component/images/r6.png";
import ex1 from "./component/images/ex1.png";
import ex2 from "./component/images/ex2.png";
import ex3 from "./component/images/ex3.png";
import ex4 from "./component/images/ex4.png";
import ex5 from "./component/images/ex5.png";
import ex6 from "./component/images/ex6.png";
import team1 from "./component/images/team1.png";
import team2 from "./component/images/team2.png";
import team3 from "./component/images/team3.png";

const Data = {
  feat: [
    {
      img: feat1,
      title: "family house",
      text: "122 property",
    },
    {
      img: feat2,
      title: "hose & villa",
      text: "50 property",
    },
    {
      img: feat3,
      title: "apartment",
      text: "140 property",
    },
    {
      img: feat4,
      title: "office & studio",
      text: "30 property",
    },
  ],

  rec: [
    {
      img: rec1,
      type: "For Rent",
      icon: faHeart,
      title: "Red Carpet Real Estate",
      text: "210 Zirak Road, Canada",
      icon1: faMapMarker,
      price: "$ 3,700",
      typ: "Apartment",
    },
    {
      img: rec2,
      type: "For Sale",
      icon: faHeart,
      title: "Fairmount Properties",
      text: "5698 Zirak Road, NewYork",
      icon1: faMapMarker,
      price: "$ 4,300",
      typ: "Condos",
    },
    {
      img: rec3,
      type: "For Rent",
      icon: faHeart,
      title: "The Real Estate Corner",
      text: "5624 Mooker Market, USA",
      icon1: faMapMarker,
      price: "$ 5,200",
      typ: "Offices",
    },
    {
      img: rec4,
      type: "For Rent",
      icon: faHeart,
      title: "The Real Estate Corner",
      text: "5621 Liverpool, London",
      icon1: faMapMarker,
      price: "$ 6,420",
      typ: "Homes & Villas",
    },
    {
      img: rec5,
      type: "For Rent",
      icon: faHeart,
      title: "The Real Estate Corner",
      text: "210 Montreal Road, Canada",
      icon1: faMapMarker,
      price: "$ 2,550",
      typ: "Commercial",
    },
    {
      img: rec6,
      type: "For Rent",
      icon: faHeart,
      title: "The Real Estate Corner",
      text: "210 Zirak Road, Canada",
      icon1: faMapMarker,
      price: "$ 7,350",
      typ: "Apartment",
    },
  ],

  exp: [
    {
      cover: ex1,
      title: "New Orleans, Louisiana",
      villas: "12 Villas",
      apartments: "10 Apartments",
      offices: "07 Offices",
    },
    {
      cover: ex2,
      title: "New Orleans, Louisiana",
      villas: "12 Villas",
      apartments: "10 Apartments",
      offices: "07 Offices",
    },
    {
      cover: ex3,
      title: "New Orleans, Louisiana",
      villas: "12 Villas",
      apartments: "10 Apartments",
      offices: "07 Offices",
    },
    {
      cover: ex4,
      title: "New Orleans, Louisiana",
      villas: "12 Villas",
      apartments: "10 Apartments",
      offices: "07 Offices",
    },
    {
      cover: ex5,
      title: "New Orleans, Louisiana",
      villas: "12 Villas",
      apartments: "10 Apartments",
      offices: "07 Offices",
    },
    {
      cover: ex6,
      title: "New Orleans, Louisiana",
      villas: "12 Villas",
      apartments: "10 Apartments",
      offices: "07 Offices",
    },
  ],

  awar: [
    {
      icon: faTrophy,
      num: "32 M",
      name: "Blue Burmin Award",
    },
    {
      icon: faShoppingBag,
      num: "43 M",
      name: "Mimo X11 Award",
    },
    {
      icon: faLightbulb,
      num: "51 M",
      name: "Australian UGC Award",
    },
    {
      icon: faHeart,
      num: "42 M",
      name: "IITCA Green Award",
    },
  ],

  team: [
    {
      list: "50",
      cover: team1,
      location: "Denever, USA",
      name: "Anna K. Young",
      icon: [
        <i className="fa-brands fa-facebook-f"></i>,
        <i className="fa-brands fa-linkedin"></i>,
        <i className="fa-brands fa-twitter"></i>,
        <i className="fa-brands fa-instagram"></i>,
      ],
    },
    {
      list: "70",
      cover: team2,
      location: "Denever, USA",
      name: "Anna K. Young",
      icon: [
        <i className="fa-brands fa-facebook-f"></i>,
        <i className="fa-brands fa-linkedin"></i>,
        <i className="fa-brands fa-twitter"></i>,
        <i className="fa-brands fa-instagram"></i>,
      ],
    },
    {
      list: "80",
      cover: team3,
      location: "Denever, USA",
      name: "Anna K. Young",
      icon: [
        <i className="fa-brands fa-facebook-f"></i>,
        <i className="fa-brands fa-linkedin"></i>,
        <i className="fa-brands fa-twitter"></i>,
        <i className="fa-brands fa-instagram"></i>,
      ],
    },
  ],

 price : [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "5GB Cloud Storage",
      },
      { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Personal Help Support" },
      { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Enterprise SLA" },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class='fa-solid fa-x'></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "Enterprise SLA",
      },
    ],
  },
],

  footer: [
    {
      title: "LAYOUTS",
      links: [
        "Home Page",
        "About Page",
        "Service Page",
        "Property Page",
        "Contact Page",
        "Single Blog",
      ],
    },
    {
      title: "ALL SECTIONS",
      links: [
        "Headers",
        "Features",
        "Attractive",
        "Testimonials",
        "Videos",
        "Footers",
      ],
    },
    {
      title: "COMPANY",
      links: ["About", "Blog", "Pricing", "Affiliate", "Login", "Changelog"],
    },
  ],
};

export default Data;
