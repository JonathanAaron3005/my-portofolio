import { Icons } from "@/components/Icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jonathan Aaron Wibawa",
  initials: "JAW",
  location: "Jakarta, Indonesia",
  skills: [
    {
      title: "My Tech Stack",
      description:
        "I specialize in backend development with a strong focus on NestJS, ExpressJS, MongoDB, PostgreSQL, Firebase, and Supabase. Additionally, I excel in iOS development using Swift and SwiftUI, delivering seamless and efficient applications across platforms.",
    },
    {
      title: "Market & User Research",
      description:
        "Uncover insights to drive informed, user-centered product decisions.",
    },
    {
      title: "Growth Mindset",
      description:
        "Embrace continuous learning and adaptability for personal and professional growth.",
    },
    {
      title: "Version Control & Collaboration",
      description:
        "Skilled in Git for efficient code management and collaboration, ensuring smooth development workflows.",
    },
    {
      title: "SOLID & Clean Architecture",
      description:
        "I apply SOLID principles and Clean Architecture to create scalable, maintainable, and testable software systems, ensuring code quality and long-term flexibility in development.",
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jonathanAaron3005/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jonathanwibawa/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      image: "/kreate banner.webp",
      title: "Kreate",
      description:
        "Earn through personalized content while fostering deeper connections with your fans.",
      link: "https://medium.com/@jonathanaaron3005/kreate-your-content-is-valuable-f79aaf4b1818",
      github: "",
    },
    {
      image: "/express logo.webp",
      title: "YelpCamp",
      description: "A Web Application for Finding and Reviewing Campgrounds",
      link: "/projects/yelp-camp",
      github: "https://github.com/JonathanAaron3005/Yelp-Camp",
    },
    {
      image: "/golang.png",
      title: "GoRestaurantApp",
      description: "Scalable Backend for Restaurant Management Built with Go",
      link: "/projects/go-restaurant-app",
      github: "https://github.com/JonathanAaron3005/GO-restaurant-app",
    },
    {
      image: "/catlorie.webp",
      title: "Catlorie",
      description:
        "Enhancing User Motivation in Calorie Tracking Through Gamification",
      link: "https://medium.com/@jonathanaaron3005/catlorie-enhancing-user-motivation-in-calorie-tracking-through-gamification-f04792e9b2d1",
      github: "https://github.com/JonathanAaron3005/Mini2_Catlorie",
    },
    {
      image: "/breatheee.webp",
      title: "Breatheee",
      description:
        "Transforming Asthma Care with Tailored Exercise Plans and Real-Time Monitoring",
      link: "https://medium.com/@jonathanaaron3005/breatheee-transforming-asthma-care-with-tailored-exercise-plans-and-real-time-monitoring-1d870e025e2e",
      github:
        "https://github.com/JonathanAaron3005/Mini3_AsthmaApp/tree/frontend-watch",
    },
    {
      image: "/weather_way.webp",
      title: "WeatherWay",
      description:
        "Revolutionizing Outdoor Planning for Housewives with Integrated Weather and Route Forecasting",
      link: "https://medium.com/@jonathanaaron3005/weatherway-revolutionizing-outdoor-planning-for-housewives-with-integrated-weather-and-route-731d0626a1a8",
      github: "https://github.com/JonathanAaron3005/Nano-3_WeatherMap-main",
    },
    {
      image: "/strumtastic.webp",
      title: "StrumTastic",
      description:
        "Enhancing the Musical Experience: StrumTastic with Machine Learning and Media on iPad and Apple Watch",
      link: "https://medium.com/@jonathanaaron3005/enhancing-the-musical-experience-strumtastic-with-machine-learning-and-media-on-ipad-and-apple-4f506080c988",
      github: "https://github.com/JonathanAaron3005/StrumTastic",
    },
  ],
};
