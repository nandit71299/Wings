import mobileAppImg from "./assets/imgAssets/mobile-app.jpg";
import eCommerceImg from "./assets/imgAssets/e-commerce.jpg";
import webImg from "./assets/imgAssets/web.jpg";
import softwareTesting from "./assets/imgAssets/softwareTesting.jpg";
import seo from "./assets/imgAssets/seo.jpg";

import thingTestingLogo from "./assets/projects/thing-testing-logo.png";
import commercialEstateLogo from "./assets/projects/commercial-real-estate-logo.png";
import arogyaAiLogo from "./assets/projects/arogya-logo.png";
import artlistLogo from "./assets/projects/artlist-logo.png";
import rentATempLogo from "./assets/projects/rent-a-temp-logo.png";
import micImg from "./assets/stories/mic.jpg";
import ayurvedaImg from "./assets/stories/ayurveda.jpg";
import legalMeetingImg from "./assets/stories/legal-meeting.jpg";
import buildingImg from "./assets/stories/building.jpg";

import reactLogo from "./assets/expertise/React-icon.png";
import flutterLogo from "./assets/expertise/flutter.png";
import laravelLogo from "./assets/expertise/laravel.png";
import nextjsLogo from "./assets/expertise/nextjs.svg";
import nodejsLogo from "./assets/expertise/nodejs.png";
import wordpressLogo from "./assets/expertise/wordpress.png";

import challangeIcon from "./assets/imgAssets/challange.png";
import solutionIcon from "./assets/imgAssets/solution.png";
import outcomeIcon from "./assets/imgAssets/outcome.png";

import ontimedelivery from "./assets/imgAssets/ontimedelivery.png";
import opcontent from "./assets/imgAssets/opcontent.png";
import socialmedia from "./assets/imgAssets/socialmedia.png";
import support from "./assets/imgAssets/support.png";

import easyToUse from "./assets/imgAssets/easytouse.png";
import mobilefriendly from "./assets/imgAssets/mobilefriendly.png";
import quick from "./assets/imgAssets/quick.png";
import secure from "./assets/imgAssets/secure.png";

const projects = [
  {
    id: 1,
    title: "Thing Testing",
    img: thingTestingLogo,
  },
  {
    id: 2,
    title: "Commercial Estate",
    img: commercialEstateLogo,
  },
  {
    id: 3,
    title: "Arogya.ai",
    img: `${arogyaAiLogo}`,
  },
  {
    id: 4,
    title: "Artlist",
    img: artlistLogo,
  },
  {
    id: 5,
    title: "Rent A Temp",
    img: rentATempLogo,
  },
];

const stories = [
  {
    id: 1,
    sector: "Online Streaming",
    service: "Web Development",
    title: "Radio Mirchi",
    img: micImg,
    storyTitle:
      "Wings helped Radio Mirchi establish its online presence with a cutting-edge web application.",
    story:
      "Radio Mirchi, a leading online streaming service, needed a robust platform to enhance user experience and engagement. Wings developed a scalable web app to handle high traffic, user interactions, and streaming demands.",
    deployedLink: "https://www.radiomirchi.com",
    challenge: {
      icon: challangeIcon,
      title: "Handling High Traffic and Seamless Streaming",
      description:
        "Radio Mirchi faced challenges in handling large numbers of concurrent users while ensuring high-quality, uninterrupted streaming. The previous platform was unable to scale with the growing number of listeners and faced performance issues.",
    },
    solution: {
      icon: solutionIcon,
      title: "Developing a Scalable, User-Centric Web Platform",
      description:
        "Wings developed a new, high-performance platform with cloud integration, capable of scaling based on user demand. The design focused on creating an intuitive and engaging user experience, enabling users to enjoy uninterrupted radio streaming across multiple devices.",
    },
    outcome: {
      icon: outcomeIcon,
      title: "Enhanced User Experience and Streamlined Performance",
      description:
        "After the deployment, Radio Mirchi witnessed an increase in user engagement, improved streaming quality, and a reduction in downtime. The platform’s scalability allowed them to efficiently handle peak traffic, improving their overall service quality.",
    },
  },
  {
    id: 2,
    sector: "Healthcare",
    service: "Web Development",
    title: "AushadhiKart",
    img: ayurvedaImg,
    storyTitle:
      "Wings helps AushadhiKart establish an online presence and sell their products through a robust website.",
    story:
      "AushadhiKart, an Ayurvedic medicine e-commerce platform, faced significant challenges in establishing a strong online presence and selling their products efficiently. Wings developed an easy-to-use e-commerce platform to address these needs.",
    deployedLink: "https://www.aushadhikart.com/",
    challenge: {
      icon: challangeIcon,
      title:
        "Overcoming the Digital Divide: Increasing Online Engagement for Ayurvedic Brands",
      description:
        "AushadhiKart faced challenges in engaging its target audience and overcoming customer skepticism around online wellness purchases. The competition in the Ayurvedic market was intense, with limited visibility in the online space.",
    },
    solution: {
      icon: solutionIcon,

      title:
        "AushadhiKart: Revolutionizing Online Healthcare through Web Development",
      description:
        "Wings developed a cutting-edge web application that met AushadhiKart's e-commerce needs, ensuring a seamless user experience. Features like product recommendations, secure payment gateways, and a simple checkout process helped boost engagement and conversion rates.",
    },
    outcome: {
      icon: outcomeIcon,

      title:
        "AushadhiKart: Revolutionizing Online Healthcare through Web Development",
      description:
        "With the launch of their new platform, AushadhiKart successfully improved customer engagement, expanded its product reach, and experienced significant growth in online sales, establishing itself as a trusted e-commerce brand for Ayurvedic products.",
    },
  },
  {
    id: 3,
    sector: "Legal Services",
    service: "Web Development",
    title: "Insurance Samadhan",
    img: legalMeetingImg,
    storyTitle:
      "Wings empowers Insurance Samadhan with a user-friendly platform to simplify insurance claim processes.",
    story:
      "Insurance Samadhan faced significant issues with simplifying the insurance claim process for their clients. Wings created a web platform that made it easier for users to submit and track claims, bridging the gap between insurance companies and their customers.",
    deployedLink: "https://www.insurancesamadhan.com/",
    challenge: {
      icon: challangeIcon,

      title: "Simplifying Insurance Claims and Customer Interactions",
      description:
        "Insurance Samadhan needed a platform that could easily guide customers through the complex insurance claims process, making it user-friendly while ensuring transparency and easy access to claim status updates.",
    },
    solution: {
      icon: solutionIcon,

      title: "Creating a Centralized Insurance Claims Management System",
      description:
        "Wings developed a centralized platform that allowed users to easily file claims, check status updates, and directly communicate with insurance agents. Features like real-time updates, FAQ sections, and a helpdesk system made the process seamless.",
    },
    outcome: {
      icon: outcomeIcon,

      title:
        "Streamlined Insurance Claim Process with High Client Satisfaction",
      description:
        "Since the platform’s deployment, Insurance Samadhan has experienced improved customer satisfaction, faster claim resolutions, and a noticeable increase in client engagement. The platform has become an essential tool for streamlining insurance claims in the Indian market.",
    },
  },
  {
    id: 4,
    sector: "Real Estate",
    service: "Web Development",
    title: "Commercial Real Estate",
    img: buildingImg,
    storyTitle:
      "Wings builds a seamless platform for Commercial Real Estate to showcase properties and facilitate transactions.",
    story:
      "Commercial Real Estate was facing challenges in handling their large property portfolio and connecting buyers with sellers efficiently. Wings developed a platform that allowed for easy property browsing, booking, and contact with agents.",
    deployedLink: "https://www.commercialrealestate.com/",
    challenge: {
      icon: challangeIcon,

      title:
        "Increasing Visibility and Reducing Transactional Barriers in Real Estate",
      description:
        "Commercial Real Estate had a vast portfolio of properties that were not being effectively showcased online. Additionally, the process for contacting agents and finalizing deals was time-consuming and inefficient.",
    },
    solution: {
      icon: solutionIcon,

      title:
        "Revolutionizing Property Listings and Transactions with Web Development",
      description:
        "Wings created an easy-to-navigate platform with robust property search capabilities, detailed listings, and instant communication tools to connect potential buyers with agents. The streamlined system also allowed for easy booking and transaction management.",
    },
    outcome: {
      icon: outcomeIcon,

      title: "Successful Property Sales and Enhanced Market Reach",
      description:
        "The new platform resulted in an increase in inquiries and transactions. Commercial Real Estate was able to expand its reach, attract more buyers, and close deals faster, boosting their overall sales performance.",
    },
  },
  {
    id: 5,
    sector: "Legal",
    service: "Web Development",
    title: "Israel Legal Services",
    img: legalMeetingImg,
    storyTitle:
      "Wings helps Israel Legal Services modernize their client intake and case management system with a custom platform.",
    story:
      "Israel Legal Services needed a streamlined platform to handle client intake and case management efficiently. Wings developed a comprehensive system that integrated these processes into one platform.",
    deployedLink: "https://www.israellegalservices.com/",
    challenge: {
      icon: challangeIcon,

      title: "Improving Case Management Efficiency and Client Interaction",
      description:
        "Israel Legal Services was dealing with inefficiencies in handling case files and client data. Their existing process was highly manual, leading to errors and delays, which affected client satisfaction.",
    },
    solution: {
      icon: solutionIcon,

      title:
        "Digital Transformation for Legal Services: Simplifying Case Management",
      description:
        "Wings created a custom platform that digitized the entire process, allowing for easy case tracking, document submission, and client communication. The new system saved time and improved overall service delivery.",
    },
    outcome: {
      icon: outcomeIcon,

      title:
        "Enhanced Operational Efficiency and Improved Client Relationships",
      description:
        "With the implementation of the new platform, Israel Legal Services significantly improved operational efficiency, reduced errors, and provided a better experience for their clients, leading to higher client retention and satisfaction.",
    },
  },
];

const expertises = [
  {
    id: 1,
    title: "React",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: reactLogo,
  },
  {
    id: 2,
    title: "Flutter",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: flutterLogo,
  },
  {
    id: 3,
    title: "Laravel",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: laravelLogo,
  },
  {
    id: 4,
    title: "Next.js",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: nextjsLogo,
  },
  {
    id: 5,
    title: "Node.js",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: nodejsLogo,
  },
  {
    id: 6,
    title: "WordPress",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: wordpressLogo,
  },
];

const advantages = [
  {
    id: 1,
    text: "On Time Delivery",
    icon: ontimedelivery,
    color: "white",
  },
  {
    id: 2,
    text: "Optimised Content",
    icon: opcontent,
    color: "black",
  },
  {
    id: 3,
    text: "Social Media Integration",
    icon: socialmedia,
    color: "white",
  },
  {
    id: 4,
    text: "Post Developement Support",
    icon: support,
    color: "black",
  },
];

const whyUs = [
  {
    id: 1,
    title: "Easy to use",
    description:
      "What use is a website that does not have lucid navigation & access?",
    icon: easyToUse,
  },
  {
    id: 2,
    title: "Lightning Quick",
    description:
      "Any website developed by us is guaranteed to be light and quick!",
    icon: quick,
  },
  {
    id: 3,
    title: "Secure",
    description:
      "We take care of your web security & shield you from any malware attacks.",
    icon: secure,
  },
  {
    id: 4,
    title: "Mobile-friendly",
    description:
      "Our website maintains its performance & elegance on all devices.",
    icon: mobilefriendly,
  },
];

const aboutUs = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To become a customer-centric company & digitally transform businesses across the globe",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To create a world where technology and humanity coexist harmoniously",
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "Excellence, integrity, passion, and customer satisfaction are our core values",
  },
];

const probSolvingApproach = [
  {
    id: 1,
    title: "Diagnosis",
    description:
      "Our team sits down with the client to understand the challenge. We engage in candid discussions to ensure we understand the full girth of the problem. Don't mind us taking notes though! Our team is meticulous that way!",
  },
  {
    id: 2,
    title: "Brainstorming",
    description:
      "Once we have a clear understanding of the problem, we start brainstorming potential solutions. We are here to help you brainstorm creatively and find the best possible solutions. Our team is always eager to learn and adapt.",
  },
  {
    id: 3,
    title: "Planning",
    description:
      "Once we have a solid plan in place, we start working on the project. We ensure that everything is on track and on schedule. Our team is always ready to help and support you throughout the process.",
  },
  {
    id: 4,
    title: "Implementation",
    description:
      "We work tirelessly to bring the project to life. We are here to support you and help you make the most of your time. Our team is always ready to help and support you throughout the process.",
  },
  {
    id: 5,
    title: "Launch",
    description:
      "Once the project is launched, we take care of monitoring, maintaining, and updating it. We are here to support you and help you make the most of your time. Our team is always ready to help and support you throughout the process.",
  },
  {
    id: 6,
    title: "Customer Support",
    description:
      "We are here to support you and help you make the most of your time. Our team is always ready to help and support you throughout the process, and after.",
  },
];

const services = [
  {
    id: 1,
    title: "Web Application Development",
    img: webImg,
    description:
      "When it comes to expanding your business on different domains, you need a robust base to ensure a successful journey throughout the process. And this is where Wings Tech offers highly reliable web development services by keeping your business target into consideration. With the booming internet world, creating an online presence is crucial, but many often oversee the aspects that act as building blocks of a successful business website. At Wings Tech, we understand the entire concept, schedule, and, most importantly, your expenses and thus develop a website that fits all your filters!",
    href: "/service/1",
  },
  {
    id: 2,
    title: "Mobile App Development",
    img: mobileAppImg,
    description:
      "When it comes to expanding your business on different domains, you need a robust base to ensure a successful journey throughout the process. And this is where Wings Tech offers highly reliable web development services by keeping your business target into consideration. With the booming internet world, creating an online presence is crucial, but many often oversee the aspects that act as building blocks of a successful business website. At Wings Tech, we understand the entire concept, schedule, and, most importantly, your expenses and thus develop a website that fits all your filters!",
    href: "/services/mobile-app-development",
  },
  {
    id: 3,
    title: "E-commerce Development",
    img: eCommerceImg,
    description:
      "When it comes to expanding your business on different domains, you need a robust base to ensure a successful journey throughout the process. And this is where Wings Tech offers highly reliable web development services by keeping your business target into consideration. With the booming internet world, creating an online presence is crucial, but many often oversee the aspects that act as building blocks of a successful business website. At Wings Tech, we understand the entire concept, schedule, and, most importantly, your expenses and thus develop a website that fits all your filters!",
    href: "/services/ecommerce-development",
  },
  {
    id: 4,
    title: "Software Testing & QA",
    img: softwareTesting,
    description:
      "When it comes to expanding your business on different domains, you need a robust base to ensure a successful journey throughout the process. And this is where Wings Tech offers highly reliable web development services by keeping your business target into consideration. With the booming internet world, creating an online presence is crucial, but many often oversee the aspects that act as building blocks of a successful business website. At Wings Tech, we understand the entire concept, schedule, and, most importantly, your expenses and thus develop a website that fits all your filters!",
    href: "/services/software-testing-qa",
  },
  {
    id: 5,
    title: "SEO",
    img: seo,
    description:
      "When it comes to expanding your business on different domains, you need a robust base to ensure a successful journey throughout the process. And this is where Wings Tech offers highly reliable web development services by keeping your business target into consideration. With the booming internet world, creating an online presence is crucial, but many often oversee the aspects that act as building blocks of a successful business website. At Wings Tech, we understand the entire concept, schedule, and, most importantly, your expenses and thus develop a website that fits all your filters!",
    href: "/services/seo",
  },
];

export {
  projects,
  stories,
  expertises,
  advantages,
  whyUs,
  aboutUs,
  probSolvingApproach,
  services,
};
