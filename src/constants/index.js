import projects1 from "../assets/projects1.jpeg";
import projects2 from "../assets/projects2.png";
import projects3 from "../assets/projects3.png";

import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import c6 from "../assets/c6.png"

export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certificate", label: "Certifications" },
  { href: "#projects", label: "Projects" }, 
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Malin Ashmitha Ekanayake, a creative fullstack developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently a 2nd Year Computer Science Undergraduate at University of Colombo School of computing.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};


export const ABOUT_CONTENT = {
  greeting: "About",
  line1:
    "I am a creative full-stack developer passionate about crafting immersive and intuitive web experiences. Currently, as a 2nd-year Computer Science undergraduate at the University of Colombo School of Computing, I am building a foundation in cutting-edge technologies to support my work. My projects range from single-page applications to complex multi-tiered systems, where I focus on delivering high performance and seamless user interactions.",
  line2:  
    "Specializing in full-stack development, I prioritize writing clean, maintainable code and thrive in collaborative environments where I can continuously learn and grow. My interests also extend to machine learning and AI, which I aim to incorporate into future projects to create even more dynamic and intelligent web applications."
};

export const CERTIFICATE = [
  {
    name: "AWS Educate Introduction to Cloud 101",
    image: c1,
    link: "https://www.credly.com/badges/11b7b95e-2f9c-4cce-9bd0-b22b5cd622aa/linked_in_profile",
  },
  
  {
    name: "Introduction to Neural Network course",
    image: c2,
    link: "https://www.mygreatlearning.com/certificate/RDWEYURI",
  },

  {
    name: "DevOps foundations: The core principles and practices",
    image: c3,
    link: "https://learn.microsoft.com/en-us/users/malinashmithaekanayake-5909/achievements/87vybqsw",
  },

  {
    name: "Microsoft Azure Fundamentals: Describe cloud concepts",
    image: c4,
    link: "https://learn.microsoft.com/en-us/users/malinashmithaekanayake-5909/achievements/uy7aflp3",
  },

  {
    name: "Crash Course on Data Structure and Algorithms in C++",
    image: c5,
    link: "https://www.mygreatlearning.com/certificate/NZJWTSPG",
  },

  {
    name: "Get started with Microsoft data analytics",
    image: c6,
    link: "https://learn.microsoft.com/en-us/users/malinashmithaekanayake-5909/achievements/87vlbr7w",
  },
];

export const PROJECTS = [
  {
    name: "SIMAS Autoquest",
    description: "A modern Car Rental platform",
    image: projects1,
    link: "https://github.com/MalinEkanayake31/Car-Rental-System",
  },
  
  {
    name: "Grand Park Arena",
    description: "Cricket Arena Booking And Management System",
    image: projects3,
    link: "https://github.com/RavindiFernando/GPA-FrontEnd",
  },

  {
    name: "Networking",
    description: "The Journey of Mona Lisa Across a Network",
    image: projects2,
    link: "https://lnkd.in/gVKiJjdg",
  },
];


export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "malinash246@gmail.com",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/malin_eke_31/?locale=us&hl=am-et",
      ariaLabel: "Follow me on Instagram",
      icon: "RiInstagramFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/MalinEkanayake31",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/malin-ekanayake-92a86b26b",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Malin Ashmitha Ekanayake. All rights reserved.`,
};
