// Import project thumbnails

import medicinefinderThumbnail from "../assets/images/projects/medicine-finder-application/thumbnail.webp";
import helloBuddyThumbnail from "../assets/images/projects/hello-buddy/thumbnail.webp";
import smartInventoryThumbnail from "../assets/images/projects/smart-inventory/thumbnail.webp";
import medicineThumbnail from "../assets/images/projects/medicine-finder/thumbnail.webp";

const projects = [
  {
    id: 1,
    slug:"medicine-finder-application",
    title: "Medicine Finder App",
    thumbnail: medicinefinderThumbnail,
    

    description:
      "A cross-platform MERN application that enables users to search medicines, locate nearby pharmacies, reserve medicines, and manage reservation history through a modern mobile interface.",
    features:[
    "Medicine Search",
    "Nearby Pharmacy Finder",
    "Medicine Reservation",
    "Reservation History"
],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    github:
      "https://github.com/krishnakumarb-dev/Medicine-finder-Application",

    live: "",

    featured: true,
  },

  {
    id: 2,
    slug:"medicine-finder",
    title: "Medicine Finder Web",
    thumbnail: medicineThumbnail,

    description:
      "The original web-based version of Medicine Finder that allows users to search medicines, discover nearby pharmacies, reserve medicines, and view reservation history.",
features:[
    "Search Medicines",
    "Nearby Pharmacy Search",
    "Reservation System",
    "Responsive Interface"
],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    github:
      "https://github.com/krishnakumarb-dev/Medicine-finder",

    live: "",

    featured: true,
  },

  {
    id: 3,
    slug:"hello-buddy",

    title: "Hello Buddy",

    thumbnail: helloBuddyThumbnail,

    description:
      "A modern responsive website built using React and Tailwind CSS with a premium user interface.",
features:[
    "Premium UI",
    "Responsive Design",
    "Modern Components",
    "Smooth Animations"
],
    technologies: [
      "React",
      "Tailwind",
    ],

    github:
      "https://github.com/krishnakumarb-dev/HelloBuddy-Dynamic-website",

    live: "",

    featured: true,
  },

  {
    id: 4,
    slug:"smart-inventory",


    title: "Smart Inventory",

    thumbnail: smartInventoryThumbnail,

    description:
      "Inventory management system with analytics dashboard and product management features.",
features:[
    "Responsive Design",
    "Modern Components",
    "CRUD operations",
    "Smooth Animations"
],
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
    ],

    github:
      "https://github.com/krishnakumarb-dev/Smart-Inventory-Management-System",

    live: "",

    featured: true,
  },

];

export default projects;